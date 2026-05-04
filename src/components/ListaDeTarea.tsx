import ItemTarea from "./ItemTarea";

const ListaDeTarea = ({ arrayTareasProps, borrarTareaProps}) => {
  return (
    <ul className="flex flex-col">
      {arrayTareasProps.map((textoTarea, index) => (
        <ItemTarea key={index} textoTareaProps ={textoTarea} borrarTareaProps={borrarTareaProps}></ItemTarea>
      ))}
    </ul>
  );
};

export default ListaDeTarea;
