export interface Color {
  _id: string;
  nombreColor: string;
}

export type TareaFormData = Pick<Color, "nombreColor">;