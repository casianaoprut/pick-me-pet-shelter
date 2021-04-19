import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    CommonModule,
  ],
  exports: [
    MatSliderModule,
    CommonModule,
  ]
})
export class MaterialModule { }
