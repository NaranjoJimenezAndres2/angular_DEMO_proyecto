import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  year:number;

  displayedColumns: string[] = ['Name', 'Code'];
  dataSource :[] = [];

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private pruebaService: PruebaService) {
    this.year = data.year;
   }

  ngOnInit(): void {
    this.getPilotos();
  }

  getPilotos(){
    this.pruebaService.getPilotos(this.year).subscribe(
      res => {
        console.log(res);
        this.dataSource = res;
      }
    )
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
