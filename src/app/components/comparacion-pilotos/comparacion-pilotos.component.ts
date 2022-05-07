import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-comparacion-pilotos',
  templateUrl: './comparacion-pilotos.component.html',
  styleUrls: ['./comparacion-pilotos.component.css']
})
export class ComparacionPilotosComponent implements OnInit {

  comparacionForm: FormGroup;
  year : number = 0;

  constructor(private pruebaService: PruebaService,
    private aRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder) {

      this.comparacionForm = this.fb.group({
        year : ['', Validators.required],
        piloto1 : ['', Validators.required],
        piloto2 : ['', Validators.required]
     })
    }

  ngOnInit(): void {
  }

imgsrc: any;


  //la funcion devuelve un png codificado en base64 para poder mostrarlo en la imagen
  getComparacion(){
    this.year = parseInt(this.comparacionForm.get('year')?.value);
    this.pruebaService.getComparacion(this.year, this.comparacionForm.get('piloto1')?.value, this.comparacionForm.get('piloto2')?.value).subscribe(
     /* res => {
        console.log(res);
        window.open(URL.createObjectURL(res));
        

      }
    )
  }*/
    res => {
      console.log(res);
      this.imgsrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(res));
    }
    )
}

  djangoComparacion(){
    this.year = parseInt(this.comparacionForm.get('year')?.value);
    this.pruebaService.djangoComparacion(this.year, this.comparacionForm.get('piloto1')?.value, this.comparacionForm.get('piloto2')?.value).subscribe(
      res => {
        console.log(res);
        window.open(URL.createObjectURL(res));

      }
    )
    }


}
