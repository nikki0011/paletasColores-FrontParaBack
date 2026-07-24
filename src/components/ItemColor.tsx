import type { Color } from "../interfaces/color";

interface ItemProps {
  color: Color;
  borrarColor: (color: Color) => void;
  editarColor: (color: Color) => void;
}

const ItemColor = ({ color, borrarColor, editarColor }: ItemProps) => {
  return (
    <li className="flex flex-col gap-3 rounded border border-zinc-700 bg-zinc-800 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span
          // className={`text-sm font-medium ${
          //   tarea.estado ? "text-zinc-400 line-through" : "text-zinc-200"
          // }`}
        >
          {color.nombreColor}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded border border-cyan-600 px-3 py-1 text-sm text-cyan-300 transition hover:bg-cyan-600/10"
          onClick={() => editarColor(color)}
        >
          Editar
        </button>
        <button
          type="button"
          className="rounded border border-pink-500 px-3 py-1 text-sm text-pink-400 transition hover:bg-pink-500/10"
          onClick={() => borrarColor(color)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};

export default ItemColor;
