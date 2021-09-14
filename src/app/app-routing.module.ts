import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaCrearContactoComponent } from './components/agenda-crear-contacto/agenda-crear-contacto.component';
import { AgendaListaComponent } from './components/agenda-lista/agenda-lista.component';

const routes: Routes = [
  {path: '', component: AgendaListaComponent},
  {path: 'nuevo', component: AgendaCrearContactoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
