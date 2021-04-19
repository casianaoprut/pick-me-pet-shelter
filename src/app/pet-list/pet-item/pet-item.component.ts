import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Pet} from '../../shared/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {
  showDetails = false;
  @Input()
  pet!: Pet;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

   public getAge(): number{
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

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onAdoptMe(): void{
    localStorage.setItem('selectedPet', JSON.stringify(this.pet));
    this.router.navigate(['forms/adoption']);
  }

}
