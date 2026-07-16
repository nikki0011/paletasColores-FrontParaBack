import type { Tarea, TareaFormData } from "../interfaces/tarea";

const urlTarea = import.meta.env.VITE_TAREAS || "";

export const obtenerTareasApi = async (): Promise<Tarea[]> => {
  const respuesta = await fetch(urlTarea);

  if (!respuesta.ok) {
    throw new Error(`No se pudieron obtener las tareas (${respuesta.status})`);
  }

  return respuesta.json();
};

export const crearTareaApi = async (
  nombreTarea: string
): Promise<Tarea> => {
  const respuesta = await fetch(urlTarea, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreTarea }),
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo crear la tarea (${respuesta.status})`);
  }

  return respuesta.json();
};

export const actualizarTareaApi = async (
  id: string,
  tarea: TareaFormData,
): Promise<Tarea> => {

  const respuesta = await fetch(`${urlTarea}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo actualizar la tarea (${respuesta.status})`);
  }

  return respuesta.json();
};

export const borrarTareaApi = async (id: string): Promise<void> => {
  const respuesta = await fetch(`${urlTarea}/${id}`, {
    method: "DELETE",
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo borrar la tarea (${respuesta.status})`);
  }
};