import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionFormListComponent } from './adoption-form-list.component';

describe('AdoptionFormListComponent', () => {
  let component: AdoptionFormListComponent;
  let fixture: ComponentFixture<AdoptionFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
