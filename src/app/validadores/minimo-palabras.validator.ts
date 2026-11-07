import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function minimoPalabras(cantidad: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const texto = String(control.value ?? '').trim();

    // El campo vacío se revisará con Validators.required.
    if (texto === '') {
      return null;
    }

    const palabras = texto.split(/\s+/).length;

    if (palabras < cantidad) {
      return {
        minimoPalabras: {
          requerido: cantidad,
          actual: palabras
        }
      };
    }

    return null;
  };
}