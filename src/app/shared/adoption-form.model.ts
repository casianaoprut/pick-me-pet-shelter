export interface AdoptionForm {
  idForm?: string;
  petId: string;
  firstname: string;
  lastname: string;
  adoptionDescription: string;
  otherPets: string;
  address: string;
  userUid: string;
  accepted: boolean;
  rejected: boolean;
}
