import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loading = false;
  hide = true;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private pruebaService: PruebaService) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  ingresar() {
    console.log(this.formLogin);
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    /*if (email == 'admin' && password == 'admin') {
     //redireccion al dashboard 
      this.fakeloading();  //simulacion de carga

    }else{
      //mensaje de error
      this.error();
      this.formLogin.reset();
    }
  }
*/
    this.fakeloading();
    this.pruebaService.login(email, password).subscribe(
      //recibir el token jwt desde el servidor y continuar.
      (data: any) => {
        console.log(data);
        if (data != 'error') {
          this.router.navigate(['']);
        } else {
          this.error();
          this.formLogin.reset();
        }}
      );
  }

  error(){
    this._snackBar.open('Usuario o contraseña incorrectos', 'Error', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      }, 2000);
  }


  goToRegistrer($myParam: string = ''): void {
    const navigationDetails: string[] = ['/registrer'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
