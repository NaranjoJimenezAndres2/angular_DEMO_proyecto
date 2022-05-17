import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-mostrar-django',
  templateUrl: './mostrar-django.component.html',
  styleUrls: ['./mostrar-django.component.css']
})
export class MostrarDjangoComponent implements OnInit {
  listaDjango: Lista[] = [];

  constructor(private pruebaService: PruebaService) { }



  obtenerDjango() {
    this.pruebaService.getDjango().subscribe(
    res=> {
        console.log(res);
        this.listaDjango = res;
      },
      err => console.error(err)
    );
  }  
  
  ngOnInit(): void {
    this.obtenerDjango();
  }

}
