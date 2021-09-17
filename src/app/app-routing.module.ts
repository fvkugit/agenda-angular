import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaContactosComponent } from './components/agenda-contactos/agenda-contactos.component';
import { AgendaCrearContactoComponent } from './components/agenda-crear-contacto/agenda-crear-contacto.component';
import { AgendaListaComponent } from './components/agenda-lista/agenda-lista.component';

const routes: Routes = [
  {path: '', component: AgendaContactosComponent},
  {path: 'tabla', component: AgendaListaComponent},
  {path: 'nuevo', component: AgendaCrearContactoComponent},
  {path: 'contactos', component: AgendaContactosComponent},
  {path: 'editar/:id', component: AgendaCrearContactoComponent},
  {path: 'buscar/:texto', component: AgendaContactosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
