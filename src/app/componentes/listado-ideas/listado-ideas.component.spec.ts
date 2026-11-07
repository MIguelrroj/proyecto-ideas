import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoIdeas } from './listado-ideas.component';

describe('ListadoIdeas', () => {
  let component: ListadoIdeas;
  let fixture: ComponentFixture<ListadoIdeas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoIdeas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoIdeas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
