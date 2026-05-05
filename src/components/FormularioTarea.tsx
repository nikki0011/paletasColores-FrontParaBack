import { useEffect, useState } from "react";
import ListaDeTarea from "./ListaDeTarea";

const FormularioTarea = () => {
  const tareasLocalStorage: string[] = JSON.parse(
    localStorage.getItem("arrayTareasKey") || "[]",
  );
  const [arrayTareas, setArrayaTareas] = useState<string[]>(tareasLocalStorage);
  const [tarea, setTarea] = useState<string>("");

  useEffect(() => {
    console.log("desde el useEffect");
    localStorage.setItem("arrayTareasKey", JSON.stringify(arrayTareas));
  }, [arrayTareas]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tareaBuscada = arrayTareas.find(
      (itemTarea) => itemTarea.toLowerCase() === tarea.toLowerCase().trim(),
    );
    if (tareaBuscada) {
      return alert("la tarea ya existe");
    }

    setArrayaTareas([...arrayTareas, tarea.toLowerCase().trim()]);

    setTarea("");
  };

  const borrarTarea = (nombreTarea: string): void => {
    setArrayaTareas(arrayTareas.filter((itemTarea) => itemTarea !== nombreTarea));
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="border border-slate-300 dark:border-slate-700 p-8 rounded-l bg-white dark:bg-slate-800 transition-colors"
      >
        <div className="w-full flex gap-2">
          <input
            type="text"
            className="border border-slate-300 p-2 rounded-lg bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            id="inputTarea"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button
            type="submit"
            className="bg-green-600 p-2 font-medium rounded-lg"
          >
            Enviar
          </button>
        </div>
      </form>
      <ListaDeTarea
        arrayTareasProps={arrayTareas}
        borrarTareaProps={borrarTarea}
      ></ListaDeTarea>
    </section>
  );
};

export default FormularioTarea;
