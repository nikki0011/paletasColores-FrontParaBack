export interface Color {
  _id: string;
  nombreColor: string;
}

export type ColorFormData = Pick<Color, "nombreColor">;