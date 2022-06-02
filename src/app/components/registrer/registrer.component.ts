import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userSchema } from './../../models/user';
import { User } from './../../models/user';
import { ToastrService } from 'ngx-toastr';
import { PruebaService } from 'src/app/services/prueba.service';


@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  userForm: FormGroup;
  userObject: userSchema[] = []


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private pruebaService: PruebaService
  ) {
    this.userForm = this.fb.group({
      _nombre: ['', Validators.required],
      _email: ['', Validators.required],
      _password: ['',
        [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
        ]],
      _password2: ['', Validators.required],
      _fechaNacimiento: ['', Validators.required],
      _check: [false, Validators.required]


    })
  }

  ngOnInit(): void {

  }

  //create an object with information from the form and apply methods to get the date
  addUser() {
    const user = new User(
      this.userForm.value._nombre,
      this.userForm.value._email,
      this.userForm.value._password,
      this.userForm.value._password2,
      this.userForm.value._fechaNacimiento,
      new Date()
    )

    if (user.passwordMatch(this.userForm.value._password, this.userForm.value._password2) != true) {
      this.toastr.error("Las contraseñas no coinciden", "Error")
    }
    else {

      //comparar fecha de nacimiento con el dia actual
      var today = new Date();
      var birthDate = new Date(user.fechaNacimiento);
      var age = today.getFullYear() - birthDate.getFullYear()


      if (age < 18) {
        this.toastr.error("Must be 18 years old", "Error")
      } else if (birthDate.getFullYear() >= today.getFullYear()) {
        this.toastr.error("Invalid date", "Error")
      }
      else {

        console.log(user);
        this.pruebaService.addUser(user).subscribe((x: any) => {
          console.log(x);
          if (x == 'duplicado') {
            this.toastr.error("email aldeady used, Please login", "Error")
          }
          else if (x == 'error') {
            this.toastr.error("Error", "Error")
          }
          else {
            this.toastr.success("New user has been created", "Success")
            this.router.navigate(['/login'])
          }
        })
      }
    }

  }





}
