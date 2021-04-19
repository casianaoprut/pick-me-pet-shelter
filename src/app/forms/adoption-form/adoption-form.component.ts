import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {Pet} from '../../shared/pet.model';
import {FormService} from '../form.service';
import {AdoptionForm} from '../../shared/adoption-form.model';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit {

  selectedPet: Pet | null = null;
  var1 = 'Yes';
  var2 = 'No';
  selectedValue = '';

  constructor(
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.selectedPet = JSON.parse(localStorage.getItem('selectedPet') as string);
  }

  onClose(): void{
    localStorage.removeItem('selectedPet');
    this.router.navigate(['/pets']);
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedPet?.id !== undefined){
      const adoptionForm: AdoptionForm = {
        petId: this.selectedPet?.id,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        adoptionDescription: form.value.description,
        otherPets: this.selectedValue,
        address: form.value.address
      };
      this.formService.submitAdoptionForm(adoptionForm);
      form.reset();
      this.router.navigate(['/pets']);
    }
  }
}
