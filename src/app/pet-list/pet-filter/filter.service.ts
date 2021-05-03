import {Injectable, Predicate} from '@angular/core';
import {Pet} from '../../shared/pet.model';
import {PetService} from '../pet.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private petService: PetService
  ) {
  }

  getFilterForName(name: string): Predicate<Pet> {
    return pet => {
      if (name === '') {
        return true;
      }
      return pet.name === name;
    };
  }

  getFilterForAge(ages: boolean[]): Predicate<Pet> {
    return pet => {
      for (let i = 0; i <= 2; i++) {
        if (ages[i] && this.petService.getAge(pet) === i) {
          return true;
        }
      }
      if (ages[3] && this.petService.getAge(pet) >= 3) {
        return true;
      }
      return !ages[0] &&
        !ages[1] &&
        !ages[2] &&
        !ages[3];
    };
  }

  getFilterForGender(genders: boolean[]): Predicate<Pet> {
    return pet => {
      if (genders[0] && pet.gender === 'male') {
        return true;
      }
      if (genders[1] && pet.gender === 'female') {
        return true;
      }
      return !genders[0] && !genders[1];
    };
  }

  getFilterForBreed(breeds: boolean[]): Predicate<Pet> {
    return pet => {
      if (breeds[0] && pet.breed === 'dog') {
        return true;
      }
      if (breeds[1] && pet.breed === 'cat') {
        return true;
      }
      if (breeds[2] && pet.breed === 'parrot') {
        return true;
      }
      if (breeds[3] && pet.breed === 'fish') {
        return true;
      }
      if (breeds[4] && pet.breed === 'rabbit') {
        return true;
      }
      return !breeds[0] &&
        !breeds[1] &&
        !breeds[2] &&
        !breeds[3] &&
        !breeds[4];
    };
  }
}
