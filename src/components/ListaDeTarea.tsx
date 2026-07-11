import { useEffect, useState } from "react";
import ItemTarea from "./ItemTarea";
import { listarTareasApi } from "../helpers/queries";
import Swal from "sweetalert2";

// interface ListaProps {
//   arrayTareasProps: string[];
//   borrarTareaProps: (nombreTarea: string) => void;
// }


const ListaDeTarea = () => {
  const [arrayTareas, setArrayTareas] = useState<string[]>([]);

  useEffect(() => {
    cargarTareas()
  }, []);

  const cargarTareas = async () => {
    const respuestaTarea = await listarTareasApi();
    console.log(respuestaTarea);
    if (respuestaTarea && respuestaTarea.status === 200) {
      const data = await respuestaTarea.json();
      console.log(data);
      setArrayTareas(data);
    } else {
      if (respuestaTarea && respuestaTarea.status === 200) {
        const data = await respuestaTarea.json();
        setArrayTareas(data);
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se puede mostrar los servicios en este momento`,
          icon: "success",
        });
      }
    }
  }
  return (
    <ul className="flex flex-col">
      {arrayTareas.map((tarea) => (
        <ItemTarea
          key={tarea._id}
          textoTareaProps={tarea.nombreTarea}
          // borrarTareaProps={borrarTareaProps}
        ></ItemTarea>
      ))}
    </ul>
  );
};

export default ListaDeTarea;
