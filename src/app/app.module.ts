import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarListaComponent,
    MostrarDjangoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
