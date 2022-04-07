import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'django' , component : MostrarDjangoComponent},
  { path: 'node' , component : MostrarListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
