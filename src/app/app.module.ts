import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  FormularioIdeaComponent
} from './componentes/formulario-idea/formulario-idea.component';

import {
  ListadoIdeasComponent
} from './componentes/listado-ideas/listado-ideas.component';

import { ideasReducer } from './estado/ideas.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormularioIdeaComponent,
    ListadoIdeasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      ideas: ideasReducer
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}