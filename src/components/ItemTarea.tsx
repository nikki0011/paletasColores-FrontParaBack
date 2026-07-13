interface ItemProps{
  textoTareaProps:string,
  // borrarTareaProps:(nombreTarea:string)=>void
}

const ItemTarea = ({ textoTareaProps }:ItemProps) => {
  const borrarTarea = (nombreTarea:String)=>{
    console.log('Click en la terea: ', nombreTarea)
  }
  return (
    <li className="col-end-12 flex justify-between items-center border border-amber-100 p-2">
      {textoTareaProps}
      <div className="mx-4 flex gap-4">
         <button
        className="bg-amber-800 hover:bg-amber-400  rounded-2xl p-3"
        onClick={() => borrarTarea(textoTareaProps)}
      >
        Editar
      </button>
      <button
        className="bg-red-700 hover:bg-red-500 rounded-2xl p-3"
        onClick={() => borrarTarea(textoTareaProps)}
      >
        X
      </button>
      </div>
    </li>
  );
};

export default ItemTarea;
