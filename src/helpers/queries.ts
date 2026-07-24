import type { Color, ColorFormData } from "../interfaces/color";


const urlColor = import.meta.env.VITE_COLOR || "";

export const obtenerColoresApi = async (): Promise<Color[]> => {
  const respuesta = await fetch(urlColor);

  if (!respuesta.ok) {
    throw new Error(`No se pudieron obtener los colores (${respuesta.status})`);
  }

  return respuesta.json();
};

export const crearColorApi = async (
  nombreColor: string
): Promise<Color> => {
  const respuesta = await fetch(urlColor, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreColor}),
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo crear el color (${respuesta.status})`);
  }

  return respuesta.json();
};

export const actualizarColorApi = async (
  id: string,
  color: ColorFormData,
): Promise<Color> => {

  const respuesta = await fetch(`${urlColor}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(color),
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo actualizar el color (${respuesta.status})`);
  }

  return respuesta.json();
};

export const borrarColorApi = async (id: string): Promise<void> => {
  const respuesta = await fetch(`${urlColor}/${id}`, {
    method: "DELETE",
  });

  if (!respuesta.ok) {
    throw new Error(`No se pudo borrar el color (${respuesta.status})`);
  }
};