import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdoptionFormComponent } from './user-adoption-form.component';

describe('UserFormItemComponent', () => {
  let component: UserAdoptionFormComponent;
  let fixture: ComponentFixture<UserAdoptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdoptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdoptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
