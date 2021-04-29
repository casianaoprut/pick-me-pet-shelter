import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFormItemComponent } from './volunteer-form-item.component';

describe('VolunteerFormItemComponent', () => {
  let component: VolunteerFormItemComponent;
  let fixture: ComponentFixture<VolunteerFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
