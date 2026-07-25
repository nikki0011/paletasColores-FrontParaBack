import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ListaColores from "./ListaDeColores";
import type { Color, ColorFormData } from "../interfaces/color";
import { actualizarColorApi, borrarColorApi, crearColorApi, obtenerColoresApi } from "../helpers/queries";


const FormularioColor = () => {
  const [colores, setColores] = useState<Color[]>([]);
  const [colorSeleccionado, setColorSeleccionado] = useState<Color | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ColorFormData>({
    defaultValues: {
      nombreColor: "",
    },
  });

  const cargarColores = async () => {
    try {
      const coloresApi = await obtenerColoresApi();
      // console.log(tareasApi)
      setColores(coloresApi);
    } catch (error) {
      console.warn("No se pudieron cargar los colores:", error);
    }
  };

  useEffect(() => {
    void cargarColores();
  }, []);

  const onSubmit: SubmitHandler<ColorFormData> = async (data) => {
    if (colorSeleccionado) {
      try {
        const colorActualizado = await actualizarColorApi(
          colorSeleccionado._id,
          data,
        );

        setColores((prevColores) =>
          prevColores.map((color) =>
            color._id === colorActualizado._id ? colorActualizado : color,
          ),
        );

        setColorSeleccionado(null);
        reset({ nombreColor: ""});
        void cargarColores();
      } catch (error) {
        console.error(error);
        alert("No se pudo actualizar el color.");
      }

      return;
    }

    try {
       await crearColorApi(data.nombreColor);
      // setColores((prevColores) => [...prevColores, nuevoColor]);
      void cargarColores();
      reset({ nombreColor: ""});
    } catch (error) {
      console.error(error);
      alert("No se pudo crear el color.");
    }
  };

  const editarColor = (color: Color) => {
    setColorSeleccionado(color);
    reset({ nombreColor: color.nombreColor });
  };

  const borrarColor = async (color: Color) => {
    try {
      await borrarColorApi(color._id);
      setColores((prevColores) =>
        prevColores.filter((item) => item._id !== color._id),
      );

      if (colorSeleccionado?._id === color._id) {
        setColorSeleccionado(null);
        reset({ nombreColor: "" });
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo borrar el color.");
    }
  };

  const cancelarEdicion = () => {
    setColorSeleccionado(null);
    reset({ nombreColor: ""});
  };

  return (
    <section className="my-6">
      <div className="flex flex-md-row justify-start items-center gap-3 mx-auto p-5 border border-black rounded-2xl bg-gray-950 mb-3.5">
      <div className="w-40 h-40 bg-blue-950 rounded-2xl"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mb-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <label
              className="block text-sm font-medium text-zinc-200 mb-2"
              htmlFor="nombre"
            >
              Nombre del color
            </label>
            <input
              id="nombre"
              type="text"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Ingresa nombre de color"
              {...register("nombreColor", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "La tarea debe tener al menos 3 caracteres",
                },
              })}
            />
            {errors.nombreColor && (
              <p className="mt-2 text-sm text-pink-400">
                {errors.nombreColor.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-fit rounded bg-cyan-600 px-4 py-2 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {colorSeleccionado ? "Actualizar Color" : "Agregar Color"}
          </button>
        </div>
{/* 
        <label className="inline-flex items-center gap-2 text-sm text-zinc-200">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500 focus:ring-cyan-500"
            {...register("estado")}
          />
          <span>Color terminado</span>
        </label> */}
{/* 
        <p className="text-sm text-zinc-400">
          El checkbox sin seleccionar indica que la tarea está pendiente.
        </p> */}

        {colorSeleccionado && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-300">
              Editando Color: <strong>{colorSeleccionado.nombreColor}</strong>
            </span>
            <button
              type="button"
              onClick={cancelarEdicion}
              className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white transition hover:border-zinc-500"
            >
              Cancelar edición
            </button>
          </div>
        )}
      </form>
</div>
      <ListaColores
        colores={colores}
        borrarColor={borrarColor}
        editarColor={editarColor}
      />
    </section>
  );
};

export default FormularioColor;