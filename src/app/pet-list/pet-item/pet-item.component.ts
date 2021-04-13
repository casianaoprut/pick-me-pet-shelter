import {Component, Input, OnInit} from '@angular/core';
import {Pet} from '../../shared/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {
  @Input()
  pet!: Pet;
  @Input()
  index!: number;
  constructor() { }

  ngOnInit(): void {
  }

   getAge(): number{
    const currentDate = new Date();
    const petBirthDate = this.pet.birthDate.toDate();
    let age = (new Date()).getFullYear() - petBirthDate.getFullYear();
    if (currentDate.getMonth() < petBirthDate.getMonth()){
      age--;
    } else {
      if ( currentDate.getMonth() === petBirthDate.getMonth() ){
        if (currentDate.getDay() < petBirthDate.getDay()) {
          age--;
        }
      }
    }
    return age;
  }

}
