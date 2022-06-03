import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carrera, nombreCircuitos } from 'src/app/models/carreras';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-telemetria',
  templateUrl: './telemetria.component.html',
  styleUrls: ['./telemetria.component.css']
})
export class TelemetriaComponent implements OnInit {
  telemetriaForm: FormGroup;
  carreraResultado: Carrera[] =[]
  nombreCircuitos: nombreCircuitos[] = []
  nombre:string[]=[]
  circuitos: any;

  imgsrc: any;
  constructor(private pruebaService: PruebaService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private router: Router,) { 
    this.telemetriaForm = this.fb.group({
      year: ['',Validators.required],
      nombreCircuitos: ['',Validators.required],
      piloto1: ['',Validators.required],
      piloto2: ['',Validators.required],

  })
}

  ngOnInit(): void {
  }

  obtenerYear() {
    const year = this.telemetriaForm.value.year
    console.log(year)
    this.pruebaService.getCarrerasByYear(year).subscribe((circuitos: any) => {
      console.log(circuitos)
      this.nombreCircuitos = circuitos.map((x: any) =>
        new nombreCircuitos(x.name)
        )
      console.log(this.nombreCircuitos)
      for (let i = 0; i < this.nombreCircuitos.length; i++) {  //paso de un JSON a un array simple
        this.nombre.push(this.nombreCircuitos[i].name2)


  }
  console.log(this.nombre)})
    
    }

    obtenerTelemetria(){
      const year = this.telemetriaForm.value.year
      const gp = this.telemetriaForm.value.nombreCircuitos
      const piloto1 = this.telemetriaForm.value.piloto1
      const piloto2 = this.telemetriaForm.value.piloto2
      console.log(year)
      console.log(gp)
      console.log(piloto1)
      console.log(piloto2)
      this.pruebaService.getTelemetria(piloto1,piloto2,gp,year,).subscribe(
        res => {
          console.log(res);
          this.imgsrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(res));
        }
        )
      }

}


