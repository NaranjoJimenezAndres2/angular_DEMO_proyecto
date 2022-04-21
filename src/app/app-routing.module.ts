import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { MapaMostrarComponent } from './components/mapa-mostrar/mapa-mostrar.component';
import { ComparacionPilotosComponent } from './components/comparacion-pilotos/comparacion-pilotos.component';
import { MostrarResultadosComponent } from './components/mostrar-resultados/mostrar-resultados.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'django' , component : MostrarDjangoComponent},
  { path: 'node' , component : MostrarListaComponent},
  { path: 'mapa' , component : MapaMostrarComponent},
  { path: 'comparacion' , component : ComparacionPilotosComponent},
  { path: 'carreras' , component : MostrarResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
