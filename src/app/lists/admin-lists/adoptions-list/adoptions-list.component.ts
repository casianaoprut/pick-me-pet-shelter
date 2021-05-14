import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../../../forms/form.service';
import {AdoptionForm} from '../../../shared/models/adoption-form.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-adoptions-list',
  templateUrl: './adoptions-list.component.html',
  styleUrls: ['./adoptions-list.component.css']
})
export class AdoptionsListComponent implements OnInit, OnDestroy {

  adoptionListSubscription = new Subscription();
  adoptionList: AdoptionForm[] = [];
  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.adoptionListSubscription = this.formService.adoptionList.subscribe(adoptionList => {
      this.adoptionList = adoptionList;
    });
  }

  ngOnDestroy(): void {
    this.adoptionListSubscription.unsubscribe();
  }
}
