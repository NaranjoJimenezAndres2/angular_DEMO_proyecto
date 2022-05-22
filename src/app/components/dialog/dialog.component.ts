import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table'
import { PruebaService } from 'src/app/services/prueba.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})



export class DialogComponent implements OnInit {
  displayedColumns: string[] = ['name', "code"];
  dataSource = [];
  year: any;
  

  constructor(private dialogRef: MatDialogRef<DialogComponent>,private pruebaService: PruebaService,
    @Inject(MAT_DIALOG_DATA) data: any)  {   

      this.year= data.year  //carga del dato del año desde el elemento padre al hijo

}

  

  ngOnInit(): void {
    this.getPilotos();

  }

  getPilotos(){
    this.pruebaService.getPilotos(this.year).subscribe(
      (res: any) => {
        this.dataSource = res;
        
      }
    )
  }


close() {
    this.dialogRef.close();
}
  

}
