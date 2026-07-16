import ItemTarea from "./ItemTarea";
import type { Tarea } from "../interfaces/tarea";

interface ListaProps {
  tareas: Tarea[];
  borrarTarea: (tarea: Tarea) => void;
  editarTarea: (tarea: Tarea) => void;
}

const ListaTarea = ({ tareas, borrarTarea, editarTarea }: ListaProps) => {
  if (tareas.length === 0) {
    return <p className="text-zinc-400">No hay tareas disponibles.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea._id}
          tarea={tarea}
          deleteTarea={borrarTarea}
          editTarea={editarTarea}
        />
      ))}
    </ul>
  );
};

export default ListaTarea;