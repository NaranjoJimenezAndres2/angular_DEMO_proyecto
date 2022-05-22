import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { MostrarListaComponent } from './components/mostrar-lista/mostrar-lista.component';
import { MostrarDjangoComponent } from './components/mostrar-django/mostrar-django.component';
import { MapaMostrarComponent } from './components/mapa-mostrar/mapa-mostrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparacionPilotosComponent } from './components/comparacion-pilotos/comparacion-pilotos.component';
import { MostrarResultadosComponent } from './components/mostrar-resultados/mostrar-resultados.component';
import { ResultadoDetalleComponent } from './components/resultado-detalle/resultado-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponentModule } from './components/home/carousel-basic.module';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule} from 'ngx-toastr';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


//Providers
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { Error404Component } from './components/error404/error404.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    MostrarListaComponent,
    MostrarDjangoComponent,
    MapaMostrarComponent,
    ComparacionPilotosComponent,
    MostrarResultadosComponent,
    ResultadoDetalleComponent,
    LoginComponent,
    RegistrerComponent,

    PruebaComponent,
    Error404Component,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    ToastrModule.forRoot(),
    NgbModule,
    HomeComponentModule

    

  ],
  entryComponents: [DialogComponent], //dialogo
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true} 
    ,CookieService , 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
