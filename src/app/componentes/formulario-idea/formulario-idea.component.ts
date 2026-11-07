import { Component, EventEmitter, Output } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { DatosIdea } from '../../modelos/idea';

import {
  minimoPalabras
} from '../../validadores/minimo-palabras.validator';

@Component({
  selector: 'app-formulario-idea',
  standalone: false,
  templateUrl: './formulario-idea.component.html',
  styleUrls: ['./formulario-idea.component.css']
})
export class FormularioIdeaComponent {
  @Output() ideaCreada = new EventEmitter<DatosIdea>();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      titulo: [
        '',
        [
          Validators.required,
          minimoPalabras(2)
        ]
      ],
      descripcion: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  guardar(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      return;
    }

    const datos: DatosIdea = {
      titulo: this.formulario.value.titulo.trim(),
      descripcion: this.formulario.value.descripcion.trim()
    };

    this.ideaCreada.emit(datos);

    this.formulario.reset();
  }
}