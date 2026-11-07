import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ListadoIdeasComponent
} from './componentes/listado-ideas/listado-ideas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ideas',
    pathMatch: 'full'
  },
  {
    path: 'ideas',
    component: ListadoIdeasComponent
  },
  {
    path: '**',
    redirectTo: 'ideas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}