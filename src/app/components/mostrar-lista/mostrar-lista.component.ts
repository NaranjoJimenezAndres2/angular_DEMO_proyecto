import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.component.html',
  styleUrls: ['./mostrar-lista.component.css']
})
export class MostrarListaComponent implements OnInit {
  listaHeroes: Heroes[] = [];

  constructor(private pruebaService: PruebaService) { }


  obtenerHeroes() {
    this.pruebaService.getHeroes().subscribe(
    res=> {
        console.log(res);
        this.listaHeroes = res;
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

}
