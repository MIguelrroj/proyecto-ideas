import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioIdea } from './formulario-idea.component';

describe('FormularioIdea', () => {
  let component: FormularioIdea;
  let fixture: ComponentFixture<FormularioIdea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioIdea],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioIdea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
