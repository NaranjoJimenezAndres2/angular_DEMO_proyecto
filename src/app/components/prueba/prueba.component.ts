import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';
import { Router } from 'express';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private pruebaService: PruebaService) { }

  ngOnInit(): void {
    this.gotocapado()
  }

  gotocapado() {
    this.pruebaService.getCapado().subscribe((capado: any) => {
      console.log(capado)
    })
  }
}
