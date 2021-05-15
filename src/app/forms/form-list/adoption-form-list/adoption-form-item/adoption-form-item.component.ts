import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {AdoptionForm} from '../../../../shared/models/adoption-form.model';
import {Pet} from '../../../../shared/models/pet.model';
import {PetService} from '../../../../pet-list/pet.service';
import {Subscription} from 'rxjs';
import {FormService} from '../../../form.service';

@Component({
  selector: 'app-adoption-form-item',
  templateUrl: './adoption-form-item.component.html',
  styleUrls: ['./adoption-form-item.component.css']
})
export class AdoptionFormItemComponent implements OnInit, OnDestroy {

  showDetails = false;
  pet: Pet | null = null;
  subscription = new Subscription();
  petFormsSubscription = new Subscription();
  @Input() adoptionForm!: AdoptionForm;
  @Input() adminView = true;

  constructor(
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.adoptionForm.petId).subscribe( pet => {
      this.pet = {
        ...pet,
        id: this.adoptionForm.petId
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.petFormsSubscription.unsubscribe();
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onAccept(): void {
    if (this.pet && this.pet.id) {
      this.petFormsSubscription = this.formService.getAllAdoptionFormsForPet(this.pet.id).subscribe(adoptionForms => {
        adoptionForms.map(form => {
          this.formService.rejectAdoptionForm(form);
        });
        this.formService.acceptAdoptionForm(this.adoptionForm).then(() => {
          if (this.pet){
            this.petService.adoptPet(this.pet);
          }
        });
      });
    }
  }

  onReject(): void{
    this.formService.rejectAdoptionForm(this.adoptionForm);
  }

}
