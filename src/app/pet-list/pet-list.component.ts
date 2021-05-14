import {Component, OnDestroy, OnInit, Predicate} from '@angular/core';
import {Subscription} from 'rxjs';

import {PetService} from './pet.service';
import {AuthService} from '../auth/auth.service';

import {Pet} from '../shared/models/pet.model';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {

  user: User | null = null;
  editMode = false;
  filteredPetList: Pet[] = [];
  completePetList: Pet[] = [];
  petSubscription = new Subscription();
  userSubscription = new Subscription();
  showAddPet = false;

  constructor(
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.petSubscription = this.petService.pets.subscribe( pets => {
      this.completePetList = pets;
      this.filteredPetList = pets;
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

  onHandleAddPet(): void{
    this.showAddPet = !this.showAddPet;
  }
  filterPets(filters: Predicate<Pet>[]): void{
    this.filteredPetList = this.completePetList.filter(pet => {
      return filters.every(f => f(pet));
    });
  }
}
