import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';
import { MapaMostrarComponent } from './components/mapa-mostrar/mapa-mostrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparacionPilotosComponent } from './components/comparacion-pilotos/comparacion-pilotos.component';
import { MostrarResultadosComponent } from './components/mostrar-resultados/mostrar-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarListaComponent,
    MostrarDjangoComponent,
    MapaMostrarComponent,
    ComparacionPilotosComponent,
    MostrarResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
