import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaListaComponent } from './components/agenda-lista/agenda-lista.component';
import { AgendaNavbarComponent } from './components/agenda-navbar/agenda-navbar.component';
import { AgendaCrearContactoComponent } from './components/agenda-crear-contacto/agenda-crear-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgendaListaComponent,
    AgendaNavbarComponent,
    AgendaCrearContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
