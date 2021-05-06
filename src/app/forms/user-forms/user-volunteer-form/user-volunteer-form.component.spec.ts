import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVolunteerFormComponent } from './user-volunteer-form.component';

describe('UserVolunteerFormComponent', () => {
  let component: UserVolunteerFormComponent;
  let fixture: ComponentFixture<UserVolunteerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVolunteerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVolunteerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
