import { createAction, props } from '@ngrx/store';
import { Idea } from '../modelos/idea';

export const agregarIdea = createAction(
  '[Ideas] Agregar',
  props<{ idea: Idea }>()
);

export const eliminarIdea = createAction(
  '[Ideas] Eliminar',
  props<{ id: string }>()
);

export const votarAFavor = createAction(
  '[Ideas] Votar a favor',
  props<{ id: string }>()
);

export const votarEnContra = createAction(
  '[Ideas] Votar en contra',
  props<{ id: string }>()
);