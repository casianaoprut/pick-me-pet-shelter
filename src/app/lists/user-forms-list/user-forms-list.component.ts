import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

import {User} from '../../shared/models/user.model';
import {AdoptionForm} from '../../shared/models/adoption-form.model';
import {FormService} from '../../forms/form.service';
import {VolunteerForm} from '../../shared/models/volunteer-form.model';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms-list.component.html',
  styleUrls: ['./user-forms-list.component.css']
})
export class UserFormsListComponent implements OnInit, OnDestroy {

  user: User | null = null;
  subscription = new Subscription();
  adoptionSubscription = new Subscription();
  adoptionForms: AdoptionForm[] = [];
  volunteerForms: VolunteerForm[] = [];
  volunteerSubscription = new Subscription();

  constructor(
    private authService: AuthService,
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(resultUser => {
      if ( resultUser !== undefined){
        this.user = resultUser;
        if (this.user !== null){
          this.adoptionSubscription = this.formService.getUserAdoptionForms(this.user.uid).subscribe( resultForms => {
            this.adoptionForms = resultForms;
          });
          this.volunteerSubscription = this.formService.getUserVolunteerForms(this.user.uid).subscribe(resultForms => {
            this.volunteerForms = resultForms;
          });
        }
      } else {
        this.user = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.adoptionSubscription.unsubscribe();
    this.volunteerSubscription.unsubscribe();
  }
}
