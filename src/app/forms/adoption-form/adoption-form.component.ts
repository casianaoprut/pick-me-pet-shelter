import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {FormService} from '../form.service';
import {AuthService} from '../../auth/auth.service';

import {Pet} from '../../shared/pet.model';
import {AdoptionForm} from '../../shared/adoption-form.model';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit, OnDestroy {

  user: User | null = null;
  subscription = new Subscription();
  selectedPet: Pet | null = null;
  selectedValue = '';

  constructor(
    private router: Router,
    private formService: FormService,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.selectedPet = JSON.parse(localStorage.getItem('selectedPet') as string);
    this.subscription = this.authService.user$.subscribe(user => {
      if (user !== undefined){
        this.user = user;
      }
    });
  }

  onClose(): void{
    localStorage.removeItem('selectedPet');
    this.router.navigate(['/pets']);
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedPet?.id !== undefined && this.user?.uid !== undefined){
      const adoptionForm: AdoptionForm = {
        petId: this.selectedPet?.id,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        adoptionDescription: form.value.description,
        otherPets: this.selectedValue,
        address: form.value.address,
        userUid: this.user.uid,
        accepted: false,
        rejected: false,
        userReview: true
      };
      this.formService.submitAdoptionForm(adoptionForm);
      form.reset();
      this.router.navigate(['/my-forms']);
    }
  }
}
