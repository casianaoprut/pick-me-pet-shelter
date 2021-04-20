import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {AdoptionForm} from '../../../../shared/adoption-form.model';
import {Pet} from '../../../../shared/pet.model';
import {PetService} from '../../../../pet-list/pet.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-adoption-form-item',
  templateUrl: './adoption-form-item.component.html',
  styleUrls: ['./adoption-form-item.component.css']
})
export class AdoptionFormItemComponent implements OnInit, OnDestroy {

  showDetails = false;
  pet: Pet | null = null;
  subscription = new Subscription();
  @Input() adoptionForm!: AdoptionForm;

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.adoptionForm.petId).subscribe( pet => {
      this.pet = pet;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

}
