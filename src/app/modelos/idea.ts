export interface DatosIdea {
  titulo: string;
  descripcion: string;
}

export interface Idea extends DatosIdea {
  id: string;
  votos: number;
}