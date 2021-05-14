import {Component, OnDestroy, OnInit} from '@angular/core';
import {VolunteerForm} from '../../../shared/models/volunteer-form.model';
import {Subscription} from 'rxjs';
import {FormService} from '../../../forms/form.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit, OnDestroy {

  quittersList: VolunteerForm[] = [];
  volunteerList: VolunteerForm[] = [];
  subscription = new Subscription();
  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.subscription = this.formService.volunteerList.subscribe(result => {
      this.quittersList = result.filter( form => !form.wantJob);
      this.volunteerList = result.filter( form => form.wantJob);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
