import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VolunteerForm} from '../../../../shared/models/volunteer-form.model';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../../auth/auth.service';
import {FormService} from '../../../form.service';

@Component({
  selector: 'app-volunteer-form-item',
  templateUrl: './volunteer-form-item.component.html',
  styleUrls: ['./volunteer-form-item.component.css']
})
export class VolunteerFormItemComponent implements OnInit, OnDestroy {

  userPhoto = '';
  userPhotoSubscription = new Subscription();
  @Input() adminView = false;
  @Input() volunteerForm!: VolunteerForm;

  constructor(
    private authService: AuthService,
    private formService: FormService
  ) { }

  onClear(): void{
    const form = {
      ...this.volunteerForm,
      accepted: false
    };
    this.formService.clearUserVolunteerForms(form);
  }

  ngOnInit(): void {
    this.userPhotoSubscription = this.authService.getUserPhoto(this.volunteerForm.uidUser).subscribe(photo => {
      this.userPhoto = photo;
    });
  }
  onAccept(): void{
    this.formService.acceptVolunteerForm(this.volunteerForm);
  }

  onReject(): void{
    this.formService.rejectVolunteerForm(this.volunteerForm);
  }

  ngOnDestroy(): void {
    this.userPhotoSubscription.unsubscribe();
  }
}
