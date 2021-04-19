import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pet} from '../shared/pet.model';
import {PetService} from './pet.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {
  petList: Pet[] = [];
  subscription = new Subscription();

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.subscription = this.petService.pets.subscribe( pets => {
      this.petList = pets;
    });
    // this.petList = this.petService.petList;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
