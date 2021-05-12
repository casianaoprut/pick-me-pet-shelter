import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {PetService} from '../../../pet-list/pet.service';
import {FormService} from '../../form.service';

import {AdoptionForm} from '../../../shared/adoption-form.model';
import {Pet} from '../../../shared/pet.model';

@Component({
  selector: 'app-user-form-item',
  templateUrl: './user-form-item.component.html',
  styleUrls: ['./user-form-item.component.css']
})
export class UserFormItemComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  adoptedPet: Pet = {} as Pet;
  @Input() adoptionForm!: AdoptionForm;

  constructor(
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.adoptionForm.petId).subscribe( pet => {
      this.adoptedPet = pet;
    });
  }

  onClear(): void{
    if (this.adoptionForm.accepted || this.adoptionForm.rejected){
      this.formService.clearUserAdoptionForm(this.adoptionForm);
    }
  }

  getAgeInYears(): number{
    if (this.adoptedPet.birthDate !== undefined) {
      return this.petService.getAgeInYears(this.adoptedPet);
    }
    return -1;
  }

  getAgeInMonths(): number{
    if (this.adoptedPet.birthDate !== undefined) {
      return this.petService.getAgeInMonths(this.adoptedPet);
    }
    return -1;
  }
}
