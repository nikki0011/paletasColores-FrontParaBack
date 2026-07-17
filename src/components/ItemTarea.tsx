import type { Tarea } from "../interfaces/tarea";

interface ItemProps {
  tarea: Tarea;
  deleteTarea: (tarea: Tarea) => void;
  editTarea: (tarea: Tarea) => void;
}

const ItemTarea = ({ tarea, deleteTarea, editTarea }: ItemProps) => {
  return (
    <li className="flex flex-col gap-3 rounded border border-zinc-700 bg-zinc-800 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-medium ${
            tarea.estado ? "text-zinc-400 line-through" : "text-zinc-200"
          }`}
        >
          {tarea.nombreTarea}
        </span>
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            tarea.estado === "Pendiente"
              ? "bg-zinc-700 text-zinc-300"
              : "bg-emerald-500/20 text-emerald-200"
          }`}
        >
          {tarea.estado ? "Terminada" : "Pendiente"}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded border border-cyan-600 px-3 py-1 text-sm text-cyan-300 transition hover:bg-cyan-600/10"
          onClick={() => editTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="rounded border border-pink-500 px-3 py-1 text-sm text-pink-400 transition hover:bg-pink-500/10"
          onClick={() => deleteTarea(tarea)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};

export default ItemTarea;
