import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ListaTarea from "./ListaDeTarea";
import type { Tarea, TareaFormData } from "../interfaces/color";
import {
  crearTareaApi,
  obtenerTareasApi,
  actualizarTareaApi,
  borrarTareaApi,
} from "../helpers/queries";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<Tarea | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TareaFormData>({
    defaultValues: {
      nombreTarea: "",
      estado: "",
    },
  });

  const cargarTareas = async () => {
    try {
      const tareasApi = await obtenerTareasApi();
      // console.log(tareasApi)
      setTareas(tareasApi);
    } catch (error) {
      console.warn("No se pudieron cargar las tareas:", error);
    }
  };

  useEffect(() => {
    void cargarTareas();
  }, []);

  const onSubmit: SubmitHandler<TareaFormData> = async (data) => {
    if (tareaSeleccionada) {
      try {
        const tareaActualizada = await actualizarTareaApi(
          tareaSeleccionada._id,
          data,
        );

        setTareas((prevTareas) =>
          prevTareas.map((tarea) =>
            tarea._id === tareaActualizada._id ? tareaActualizada : tarea,
          ),
        );

        setTareaSeleccionada(null);
        reset({ nombreTarea: "", estado: "" });
        void cargarTareas();
      } catch (error) {
        console.error(error);
        alert("No se pudo actualizar la tarea.");
      }

      return;
    }

    try {
       await crearTareaApi(data.nombreTarea);
      // setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
      void cargarTareas();
      reset({ nombreTarea: "", estado: "" });
    } catch (error) {
      console.error(error);
      alert("No se pudo crear la tarea.");
    }
  };

  const editarTarea = (tarea: Tarea) => {
    setTareaSeleccionada(tarea);
    reset({ nombreTarea: tarea.nombreTarea, estado: tarea.estado });
  };

  const borrarTarea = async (tarea: Tarea) => {
    try {
      await borrarTareaApi(tarea._id);
      setTareas((prevTareas) =>
        prevTareas.filter((item) => item._id !== tarea._id),
      );

      if (tareaSeleccionada?._id === tarea._id) {
        setTareaSeleccionada(null);
        reset({ nombreTarea: "", estado: "" });
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo borrar la tarea.");
    }
  };

  const cancelarEdicion = () => {
    setTareaSeleccionada(null);
    reset({ nombreTarea: "", estado: "" });
  };

  return (
    <section className="mt-6">
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
              Nombre de la tarea
            </label>
            <input
              id="nombre"
              type="text"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Ingresa una tarea"
              {...register("nombreTarea", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "La tarea debe tener al menos 3 caracteres",
                },
              })}
            />
            {errors.nombreTarea && (
              <p className="mt-2 text-sm text-pink-400">
                {errors.nombreTarea.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-fit rounded bg-cyan-600 px-4 py-2 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {tareaSeleccionada ? "Actualizar tarea" : "Agregar tarea"}
          </button>
        </div>

        <label className="inline-flex items-center gap-2 text-sm text-zinc-200">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-cyan-500 focus:ring-cyan-500"
            {...register("estado")}
          />
          <span>Tarea terminada</span>
        </label>

        <p className="text-sm text-zinc-400">
          El checkbox sin seleccionar indica que la tarea está pendiente.
        </p>

        {tareaSeleccionada && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-300">
              Editando tarea: <strong>{tareaSeleccionada.nombreTarea}</strong>
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

      <ListaTarea
        tareas={tareas}
        borrarTarea={borrarTarea}
        editarTarea={editarTarea}
      />
    </section>
  );
};

export default FormularioTarea;