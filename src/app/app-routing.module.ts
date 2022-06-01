import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapaMostrarComponent } from './components/mapa-mostrar/mapa-mostrar.component';
import { ComparacionPilotosComponent } from './components/comparacion-pilotos/comparacion-pilotos.component';
import { MostrarResultadosComponent } from './components/mostrar-resultados/mostrar-resultados.component';
import { ResultadoDetalleComponent } from './components/resultado-detalle/resultado-detalle.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Error404Component } from './components/error404/error404.component';
import { TelemetriaComponent } from './components/telemetria/telemetria.component';
import { EstrategiaComponent } from './components/estrategia/estrategia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mapa' , component : MapaMostrarComponent},
  { path: 'comparacionPilotos' , component : ComparacionPilotosComponent},
  { path: 'carreras' , component : MostrarResultadosComponent},
  { path: 'resutadoDetalle/:year/:circuitName/:driverId' , component : ResultadoDetalleComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'registrer' , component : RegistrerComponent},
  { path: 'prueba' , component : PruebaComponent, canActivate: [UserGuardGuard]},
  { path: '404-non-found', component : Error404Component},
  { path: 'telemetria', component : TelemetriaComponent},
  { path: 'estrategia', component: EstrategiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
