import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carrera, nombreCircuitos } from 'src/app/models/carreras';
import { PruebaService } from 'src/app/services/prueba.service';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-estrategia',
  templateUrl: './estrategia.component.html',
  styleUrls: ['./estrategia.component.css']
})
export class EstrategiaComponent implements OnInit {
  imgsrc: any;

  telemetriaForm: FormGroup;
  carreraResultado: Carrera[] = []
  nombreCircuitos: nombreCircuitos[] = []
  nombre: string[] = []
  drivers: string[] = []

  tyres: string[] = []
  pitStops: string[] = []


  loading = false;
  grafica = false;


  strategy: any[] = []

  json: any = { "name": "", "data": [] }




  highcharts = Highcharts;

  chartOptionsBar: any = {
    chart: {
      type: 'bar',
      backgroundColor: null,
  },
  title: {
      text: 'Race Strategy',
      style:{
        color: 'white'
      }
  },
  xAxis: {
      categories: ['Stints']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total fruit consumption'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: []
};



  constructor(private pruebaService: PruebaService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private router: Router,) {

    this.telemetriaForm = this.fb.group({
      year: ['', Validators.required],
      nombreCircuitos: ['', Validators.required],
      piloto1: ['', Validators.required],
    })

  }

  ngOnInit(): void {

  }

  obtenerYear() {
    const year = this.telemetriaForm.value.year
    console.log(year)
    this.pruebaService.getCarrerasByYear(year).subscribe((circuitos: any) => {
      this.nombreCircuitos = circuitos.map((x: any) =>
        new nombreCircuitos(x.name)
      )
      for (let i = 0; i < this.nombreCircuitos.length; i++) {  //paso de un JSON a un array simple
        this.nombre.push(this.nombreCircuitos[i].name2)


      }
    })

  }

  obtenerPilotos() {
    const year = this.telemetriaForm.value.year
    this.pruebaService.getPilotos(year).subscribe((pilotos: any) => {
      this.drivers = pilotos.map((x: any) =>
        x.code
      )
    })
  }

  obtenerTelemetria() {
    this.loading = true;
    const year = this.telemetriaForm.value.year
    const gp = this.telemetriaForm.value.nombreCircuitos
    const piloto1 = this.telemetriaForm.value.piloto1
    this.pruebaService.getTelemetriaOnlyOne(piloto1, gp, year).subscribe(
      res => {
        this.imgsrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(res));
        this.loading = false;
      }
    )
  }

  obtenerEstrategia() {
    const year = this.telemetriaForm.value.year
    const gp = this.telemetriaForm.value.nombreCircuitos
    const piloto1 = this.telemetriaForm.value.piloto1
    this.pruebaService.getEstrategia(piloto1, gp, year).subscribe(
      res => {
        this.strategy = res
        console.log(this.strategy)

        //push compound field to tyres array
        this.tyres = res.map((x: any) =>
          x.Compound
        )
        console.log(this.tyres)

        this.getStint()

      }
    )
    this.pruebaService.getPitStops(year, gp,piloto1 ).subscribe(
      res => {
        this.pitStops = res.map((x: any) =>
          x.duration
        )
        console.log(this.pitStops)
      }
    )

  }

  getStint() {
    this.chartOptionsBar.series = []

    //recorrer el array strategy y meter los datos en el objeto json en name y data
    for (let i = 0; i < this.strategy.length; i++) {  //meter los datos en el objeto json en name y data
      this.json.name = this.strategy[i].Stint.toString()
      this.json.data.push(this.strategy[i].StintLength)
      this.chartOptionsBar.series.push(this.json)
      //clear json
      this.json = {"name": "", "data": [] }
    }
    this.grafica = true;
    this.chartOptionsBar.series.reverse()

    Highcharts.chart('miGrafico01', this.chartOptionsBar);
    

  }


}






