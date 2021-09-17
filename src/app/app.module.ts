import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaListaComponent } from './components/agenda-lista/agenda-lista.component';
import { AgendaNavbarComponent } from './components/agenda-navbar/agenda-navbar.component';
import { AgendaCrearContactoComponent } from './components/agenda-crear-contacto/agenda-crear-contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaContactosComponent } from './components/agenda-contactos/agenda-contactos.component';
import { AgendaContactosBuscarComponent } from './components/agenda-contactos-buscar/agenda-contactos-buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaListaComponent,
    AgendaNavbarComponent,
    AgendaCrearContactoComponent,
    AgendaContactosComponent,
    AgendaContactosBuscarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
