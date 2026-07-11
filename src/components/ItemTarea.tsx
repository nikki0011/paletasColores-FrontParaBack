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
      <button
        className="bg-red-700 hover:bg-red-500 rounded-2xl p-3"
        onClick={() => borrarTarea(textoTareaProps)}
      >
        X
      </button>
    </li>
  );
};

export default ItemTarea;
