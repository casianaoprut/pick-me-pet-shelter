import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {PetService} from './pet.service';
import {AuthService} from '../auth/auth.service';

import {Pet} from '../shared/pet.model';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {

  user: User | null = null;
  editMode = false;
  petList: Pet[] = [];
  petSubscription = new Subscription();
  userSubscription = new Subscription();

  constructor(
    private petService: PetService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.petSubscription = this.petService.pets.subscribe( pets => {
      this.petList = pets;
    });
    this.userSubscription = this.authService.user$.subscribe(user => {
      if (user){
        this.user = user;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.petSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onHandleEditMode(): void{
    this.editMode = !this.editMode;
  }

  onAddPet(): void{
  }


}
