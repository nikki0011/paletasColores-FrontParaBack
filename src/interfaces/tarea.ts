export interface Tarea {
  _id: string;
  nombreTarea: string;
  estado: boolean;
}

export type TareaFormData = Pick<Tarea, "nombreTarea" | "estado">;