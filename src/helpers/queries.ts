
const urlTareas = import.meta.env.VITE_TAREA

export const listarTareasApi = async ():Promise<Response> =>{
    try{
        const respuesta = await fetch(urlTareas)
        return respuesta
    }catch(error){
        console.error(error)
        throw error
    }
};

export const crearTareaApi = async (tarea: String):Promise<Response> =>{
    try{
        const respuesta = await fetch(urlTareas, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarea)
        })
        return respuesta
    }catch(error){
        console.error(error)
        throw error
    }
};