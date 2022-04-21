import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';
import { Carrera } from 'src/app/models/carreras';

@Component({
  selector: 'app-mostrar-resultados',
  templateUrl: './mostrar-resultados.component.html',
  styleUrls: ['./mostrar-resultados.component.css']
})
export class MostrarResultadosComponent implements OnInit {
carreraResultado: Carrera[] =[]

  constructor(private pruebaService: PruebaService) { }

  obtenerResultado() {
    this.pruebaService.getResultado().subscribe(
    res=> {
        console.log(res);
        this.carreraResultado = res;
      },
      err => console.error(err)
    );
  }  
  
  ngOnInit(): void {
    this.obtenerResultado();
  }

}