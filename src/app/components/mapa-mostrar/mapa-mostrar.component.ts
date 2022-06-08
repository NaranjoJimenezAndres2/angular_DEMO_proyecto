import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mapa-mostrar',
  templateUrl: './mapa-mostrar.component.html',
  styleUrls: ['./mapa-mostrar.component.css']
})
export class MapaMostrarComponent implements OnInit {

  yearForm: FormGroup;

  year : number = 0;
  
 
  constructor(private pruebaService: PruebaService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder
    ) {
      this.yearForm = this.fb.group({
        year : ['', Validators.required] 

    })
  }

  ngOnInit(): void {
    
  }
//abrir la url que se envia a la api
getMapbyYear(){
  this.year = parseInt(this.yearForm.get('year')?.value);
  if (this.year > 1970 && this.year <= 2021) {
  this.pruebaService.getMapa(this.year).subscribe(
    res => {
      console.log(res);
      window.open(URL.createObjectURL(res),"_self"); //abre la url del service en una nueva ventana
      this.yearForm.reset();
    },
    err => console.log(err)
  )
} else {
  this.toastr.error('El año debe estar entre 1970 y 2021', 'Error');
  }
}

  /*openMapTab(){
    this.year = parseInt(this.yearForm.get('year')?.value)
    window.open('http://localhost:8000/map/'+this.year, '_blank');
  }*/
}
