import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Pet} from '../../shared/pet.model';
import {PetService} from '../pet.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  @Input() editMode = false;
  showDetails = false;
  showUpdateMode = false;
  age = 0;
  @Input()
  pet!: Pet;

  constructor(
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit(): void{
    this.age = this.petService.getAge(this.pet);
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onAdoptMe(): void{
    localStorage.setItem('selectedPet', JSON.stringify(this.pet));
    this.router.navigate(['forms/adoption']);
  }

  onDelete(): void{
    this.petService.deletePet(this.pet);
  }

  onHandleUpdateMode(): void{
    this.showUpdateMode = !this.showUpdateMode;
  }

}
