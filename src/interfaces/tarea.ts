export interface Tarea {
  _id: string;
  nombreTarea: string;
  estado: string;
}

export type TareaFormData = Pick<Tarea, "nombreTarea" | "estado">;