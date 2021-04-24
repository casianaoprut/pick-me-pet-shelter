import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  exports: [
    MatSliderModule,
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
