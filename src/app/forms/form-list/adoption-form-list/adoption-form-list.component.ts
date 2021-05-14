import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {FormService} from '../../form.service';

import {AdoptionForm} from '../../../shared/models/adoption-form.model';

@Component({
  selector: 'app-adoption-form-list',
  templateUrl: './adoption-form-list.component.html',
  styleUrls: ['./adoption-form-list.component.css']
})
export class AdoptionFormListComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  adoptionForms: AdoptionForm[] = [];

  constructor(
    private formService: FormService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.formService.adoptionForms.subscribe( adoptionForms => {
        this.adoptionForms = adoptionForms;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
