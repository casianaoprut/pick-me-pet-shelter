import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFormListComponent } from './volunteer-form-list.component';

describe('VolunteerFormListComponent', () => {
  let component: VolunteerFormListComponent;
  let fixture: ComponentFixture<VolunteerFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
