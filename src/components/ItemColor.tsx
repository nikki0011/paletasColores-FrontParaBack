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
          className="text-2xl font-medium"
          //   tarea.estado ? "text-zinc-400 line-through" : "text-zinc-200"
          // }`}
        >
          {color.nombreColor}
        </span>
        <div
            className="w-10 h-10 bg-blue-950 rounded-2xl"
            style={{ backgroundColor: color.nombreColor }}
          ></div>
          
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded border border-amber-400 px-3 py-1 text-sm text-amber-300 transition hover:bg-amber-600/30"
          onClick={() => editarColor(color)}
        >
          Editar
        </button>
        <button
          type="button"
          className="rounded border border-red-800 px-3 py-1 text-sm text-red-400 transition hover:bg-red-500/30"
          onClick={() => borrarColor(color)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};

export default ItemColor;
