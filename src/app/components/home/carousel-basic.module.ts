import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';




@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeComponentModule { }
