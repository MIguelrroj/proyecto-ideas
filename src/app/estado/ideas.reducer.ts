import { createReducer, on } from '@ngrx/store';
import { Idea } from '../modelos/idea';

import {
  agregarIdea,
  eliminarIdea,
  votarAFavor,
  votarEnContra
} from './ideas.actions';

export interface EstadoApp {
  ideas: Idea[];
}

export const estadoInicial: Idea[] = [
  {
    id: 'idea-1',
    titulo: 'Organizar biblioteca',
    descripcion: 'Crear un espacio para compartir libros',
    votos: 0
  },
  {
    id: 'idea-2',
    titulo: 'Aprender Angular',
    descripcion: 'Organizar un grupo de estudio',
    votos: 0
  }
];

export const ideasReducer = createReducer(
  estadoInicial,

  on(agregarIdea, (estado, { idea }) => {
    return [...estado, idea];
  }),

  on(eliminarIdea, (estado, { id }) => {
    return estado.filter(idea => idea.id !== id);
  }),

  on(votarAFavor, (estado, { id }) => {
    return estado.map(idea =>
      idea.id === id
        ? { ...idea, votos: idea.votos + 1 }
        : idea
    );
  }),

  on(votarEnContra, (estado, { id }) => {
    return estado.map(idea =>
      idea.id === id
        ? { ...idea, votos: idea.votos - 1 }
        : idea
    );
  })
);