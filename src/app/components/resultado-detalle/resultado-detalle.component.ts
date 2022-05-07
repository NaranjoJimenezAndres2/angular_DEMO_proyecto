import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { Carrera } from 'src/app/models/carreras';

@Component({
  selector: 'app-resultado-detalle',
  templateUrl: './resultado-detalle.component.html',
  styleUrls: ['./resultado-detalle.component.css']
})
export class ResultadoDetalleComponent implements OnInit {
  race: string | null;
  driverId: string | null;
  carreraResultado: Carrera[] =[]

  constructor(private pruebaService: PruebaService,
    private aRouter: ActivatedRoute,
    private router: Router,
    )
     {
       this.race = this.aRouter.snapshot.paramMap.get('circuitName'),
       this.driverId = this.aRouter.snapshot.paramMap.get('driverId')
    }

  ngOnInit(): void {
    this.getResultadoDetalle()
  }

  getResultadoDetalle(){
    if (this.race != null && this.driverId != null) {
      this.pruebaService.getResultadoDetalle(this.race,this.driverId).subscribe(
      res=> {
        this.carreraResultado = res;
        console.log(this.carreraResultado)
      },
      err => console.error(err)
    );
  }  

}
}
