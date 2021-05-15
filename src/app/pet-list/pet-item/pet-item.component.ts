import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Pet} from '../../shared/models/pet.model';
import {PetService} from '../pet.service';
import {Subscription} from 'rxjs';
import {FormService} from '../../forms/form.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  @Input() editMode = false;
  showDetails = false;
  showEditPetMode = false;
  @Input()
  pet!: Pet;
  subscription = new Subscription();

  constructor(
    private router: Router,
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnInit(): void{
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onAdoptMe(): void{
    localStorage.setItem('selectedPet', JSON.stringify(this.pet));
    this.router.navigate(['forms/adoption']);
  }

  onDelete(): void{
    this.petService.deletePet(this.pet);
    if (this.pet.id) {
      this.subscription = this.formService.getAllAdoptionFormsForPet(this.pet.id).subscribe(adoptionForms => {
        adoptionForms.map(form => {
          this.formService.rejectAdoptionForm(form);
        });
      });
    }
  }

  onHandleEditPetMode(): void{
    this.showEditPetMode = !this.showEditPetMode;
  }

  onGetAgeInYears(): number{
    return this.petService.getAgeInYears(this.pet);
  }

  onGetAgeInMonths(): number{
    return this.petService.getAgeInMonths(this.pet);
  }

}
