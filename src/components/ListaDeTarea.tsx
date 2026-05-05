import ItemTarea from "./ItemTarea";

interface ListaProps {
  arrayTareasProps: string[];
  borrarTareaProps: (nombreTarea: string) => void;
}

const ListaDeTarea = ({ arrayTareasProps, borrarTareaProps }: ListaProps) => {
  return (
    <ul className="flex flex-col">
      {arrayTareasProps.map((textoTarea, index) => (
        <ItemTarea
          key={index}
          textoTareaProps={textoTarea}
          borrarTareaProps={borrarTareaProps}
        ></ItemTarea>
      ))}
    </ul>
  );
};

export default ListaDeTarea;
