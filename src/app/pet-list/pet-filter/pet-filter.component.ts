import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {PetItemComponent} from '../pet-item/pet-item.component';

@Component({
  selector: 'app-pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.css']
})
export class PetFilterComponent implements OnInit {
  visibleSidebar1 = false;
  age: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // ageRange(): number[] {
  //   if ()
  // }

}
