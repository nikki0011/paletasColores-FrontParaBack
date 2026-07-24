import ItemColor from "./ItemColor";
import type { Color } from "../interfaces/color";

interface ListaProps {
  colores: Color[];
  borrarColor: (color: Color) => void;
  editarColor: (color: Color) => void;
}

const ListaColores = ({ colores, borrarColor, editarColor }: ListaProps) => {
  if (colores.length === 0) {
    return <p className="text-zinc-400">No hay colores disponibles.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {colores.map((color) => (
        <ItemColor
          key={color._id}
          color={color}
          borrarColor={borrarColor}
          editarColor={editarColor}
        />
      ))}
    </ul>
  );
};

export default ListaColores;