import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';
import { Carrera , nombreCircuitos } from 'src/app/models/carreras';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isSameMultiYearView } from '@angular/material/datepicker/multi-year-view';

@Component({
  selector: 'app-mostrar-resultados',
  templateUrl: './mostrar-resultados.component.html',
  styleUrls: ['./mostrar-resultados.component.css']
})
export class MostrarResultadosComponent implements OnInit {
carreraResultado: Carrera[] =[]
nombreCircuitos: nombreCircuitos[] = []
nombre:string[]=[]
circuitos: any;
 loading = false;

//variables de control
variableAno = true;
variableCircuito = false;
botton = true;


//variables para html
year:string = '';
nombreCircuito: string = '';


//formulario
yearForm: FormGroup;


  constructor(private pruebaService: PruebaService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {

      this.yearForm = this.fb.group({
        year: ['',Validators.required],
        nombreCircuitos: [null,Validators.required]

     })
    }



  obtenerYear() {
    const year = this.yearForm.value.year
    console.log(year)
    this.pruebaService.getCarrerasByYear(year).subscribe((circuitos: any) => {
     // console.log(circuitos)
      this.nombreCircuitos = circuitos.map((x: any) =>
        new nombreCircuitos(x.name)
        )
      console.log(this.nombreCircuitos)
      for (let i = 0; i < this.nombreCircuitos.length; i++) {  //paso de un JSON a un array simple
        this.nombre.push(this.nombreCircuitos[i].name)


  }
  console.log(this.nombre)})
  this.variableCircuito = true;
    
    }


reset() {
  this.yearForm.reset();
  this.variableCircuito = false;
  this.variableAno = true;
  this.botton = true;
  //vaciar la variable nombreCircuitos
  this.nombre = [];
  this.carreraResultado = [];

}
 

  obtenerResultado() {
    this.year = this.yearForm.value.year
    this.nombreCircuito = this.yearForm.value.nombreCircuitos
    this.pruebaService.getResultado(this.year, this.nombreCircuito).subscribe(
    res=> {
        console.log(res);
        this.carreraResultado = res;
        this.variableAno = false;
        this.variableCircuito = false;
        this.botton = false;
        this.toastr.success('Resultados obtenidos correctamente')

      },
      err => console.error(err)
    );
  }  
  
  ngOnInit(): void {
  }

  openGoTo(year: string ,circuitName:string, driverId:string){
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/resutadoDetalle/${year}/${circuitName}/${driverId}`]))
    window.open(url, '_blank');
  }

}