import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/user.model';
import {Subscription} from 'rxjs';
import {VolunteerForm} from '../../shared/volunteer-form.model';
import {FormService} from '../form.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {

  user: User | null = null;
  subscription = new Subscription();
  constructor(
    private router: Router,
    private authService: AuthService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(resultUser => {
      if (resultUser !== undefined){
      this.user = resultUser;
      }
    });
  }
  onSubmit(form: NgForm): void {
    if (form.valid && this.user?.uid !== undefined) {
      const workDays: string[] = [];

      if (form.value.monday){
        workDays[workDays.length] = 'Monday';
      }
      if (form.value.tuesday){
        workDays[workDays.length] = 'Tuesday';
      }
      if (form.value.wednesday){
        workDays[workDays.length] = 'Wednesday';
      }
      if (form.value.thursday){
        workDays[workDays.length] = 'Thursday';
      }
      if (form.value.friday){
        workDays[workDays.length] = 'Friday';
      }
      if (workDays.length === 0){
        workDays[0] = 'Program Flexibil';
      }
      const formData: VolunteerForm = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        phoneNumber: form.value.phoneNumber,
        address: form.value.address,
        city: form.value.city,
        state: form.value.state,
        workDays,
        uidUser: this.user?.uid,
        accepted: false,
        rejected: false
      };
      this.formService.submitVolunteerForm(formData);
      form.reset();
      this.router.navigate(['/pets']);
    }
  }
}
