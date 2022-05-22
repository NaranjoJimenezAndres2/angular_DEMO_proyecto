import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  variable= false;
  collapsed = true;


  constructor(private setCookie: CookieService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
this.ifExistsCookies();
  }

  ifExistsCookies(){
    if (this.setCookie.check('token')) {
      this.variable= true;
    } 
  }


  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  
  logout(){
    //destruimos la cookie
    this.setCookie.delete('token');
    this._snackBar.open('Log out successed', 'Success', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
    this.router.navigate(['']);
    //recargar la pagina
    location.reload();


}

}
