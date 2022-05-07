import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { MapaMostrarComponent } from './components/mapa-mostrar/mapa-mostrar.component';
import { ComparacionPilotosComponent } from './components/comparacion-pilotos/comparacion-pilotos.component';
import { MostrarResultadosComponent } from './components/mostrar-resultados/mostrar-resultados.component';
import { ResultadoDetalleComponent } from './components/resultado-detalle/resultado-detalle.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'django' , component : MostrarDjangoComponent},
  { path: 'node' , component : MostrarListaComponent},
  { path: 'mapa' , component : MapaMostrarComponent},
  { path: 'comparacion' , component : ComparacionPilotosComponent},
  { path: 'carreras' , component : MostrarResultadosComponent},
  { path: 'resutadoDetalle/:circuitName/:driverId' , component : ResultadoDetalleComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'registrer' , component : RegistrerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
