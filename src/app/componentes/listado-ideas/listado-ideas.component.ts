import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DatosIdea, Idea } from '../../modelos/idea';
import { EstadoApp } from '../../estado/ideas.reducer';

import {
  agregarIdea,
  eliminarIdea,
  votarAFavor,
  votarEnContra
} from '../../estado/ideas.actions';

@Component({
  selector: 'app-listado-ideas',
  standalone: false,
  templateUrl: './listado-ideas.component.html',
  styleUrls: ['./listado-ideas.component.css']
})
export class ListadoIdeasComponent {
  ideas$: Observable<Idea[]>;

  constructor(private store: Store<EstadoApp>) {
    this.ideas$ = this.store.select(estado => estado.ideas);
  }


  recibirIdea(datos: DatosIdea): void {
    const nuevaIdea: Idea = {
      id: crypto.randomUUID(),
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      votos: 0
    };

    this.store.dispatch(
      agregarIdea({ idea: nuevaIdea })
    );
  }

  eliminar(id: string): void {
    this.store.dispatch(
      eliminarIdea({ id })
    );
  }

  votarPositivo(id: string): void {
    this.store.dispatch(
      votarAFavor({ id })
    );
  }

  votarNegativo(id: string): void {
    this.store.dispatch(
      votarEnContra({ id })
    );
  }
}