import {Component, Input, OnInit} from '@angular/core';
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
export class UserFormItemComponent implements OnInit {

  subscription = new Subscription();
  adoptedPet: Pet | null = null;
  age = 0;
  @Input() adoptionForm!: AdoptionForm;

  constructor(
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.adoptionForm.petId).subscribe( pet => {
      this.adoptedPet = pet;
      this.age = this.petService.getAge(pet);
    });
  }

  onClear(): void{
    if (this.adoptionForm.accepted || this.adoptionForm.rejected){
      this.formService.clearUserAdoptionForm(this.adoptionForm);
    }
  }
}
