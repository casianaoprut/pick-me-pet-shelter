import {Component, OnDestroy, OnInit} from '@angular/core';
import {VolunteerForm} from '../../../shared/models/volunteer-form.model';
import {Subscription} from 'rxjs';
import {FormService} from '../../form.service';

@Component({
  selector: 'app-volunteer-form-list',
  templateUrl: './volunteer-form-list.component.html',
  styleUrls: ['./volunteer-form-list.component.css']
})
export class VolunteerFormListComponent implements OnInit, OnDestroy{

  subscription = new Subscription();
  volunteerForms: VolunteerForm[] = [];
  constructor(
    private formService: FormService,
  ) { }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.subscription = this.formService.pendingVolunteerForms.subscribe(volunteerForms => {
      this.volunteerForms = volunteerForms;
    });

 }
}
