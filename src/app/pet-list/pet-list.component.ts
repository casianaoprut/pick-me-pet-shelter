import { Component, OnInit } from '@angular/core';
import {Pet} from '../shared/pet.model';
import {PetService} from './pet.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  petList: Pet[] = [];
  subscription: Subscription;

  constructor(
    private petService: PetService
  ) {
    this.subscription = this.petService.pets.subscribe( pets => {
      this.petList = pets;
    });
  }

  ngOnInit(): void {
  }

}
