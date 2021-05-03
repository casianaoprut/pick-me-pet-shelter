import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VolunteerForm} from '../../../../shared/volunteer-form.model';
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
  @Input() volunteerForm!: VolunteerForm;

  constructor(
    private authService: AuthService,
    private formService: FormService
  ) { }

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
