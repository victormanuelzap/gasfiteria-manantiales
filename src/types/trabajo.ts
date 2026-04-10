export interface TrabajoItem {
  id: number;
  titulo: string;
  descripcion: string;
  distrito?: string;
  categoria?: string;
  alt: string;
  imagen: string;
  thumbnail?: string;
  destacado?: boolean;
}