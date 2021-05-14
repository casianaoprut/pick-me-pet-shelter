import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../../../forms/form.service';
import {Subscription} from 'rxjs';
import {VolunteerForm} from '../../../shared/models/volunteer-form.model';
import {User} from '../../../shared/models/user.model';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-user-volunteer-form',
  templateUrl: './user-volunteer-form.component.html',
  styleUrls: ['./user-volunteer-form.component.css']
})
export class UserVolunteerFormComponent implements OnInit, OnDestroy {

  userPhoto = '';
  userPhotoSubscription = new Subscription();
  user: User | null = null;
  subscription = new Subscription();
  @Input() volunteerForm!: VolunteerForm;

  constructor(
    private authService: AuthService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.userPhotoSubscription = this.authService.getUserPhoto(this.volunteerForm.uidUser).subscribe(photo => {
      this.userPhoto = photo;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.userPhotoSubscription.unsubscribe();
  }

  onClear(): void{
    if (this.volunteerForm.accepted || this.volunteerForm.rejected){
      this.formService.clearUserVolunteerForms(this.volunteerForm);
    }
  }
}
