import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionFormItemComponent } from './adoption-form-item.component';

describe('AdoptionFormItemComponent', () => {
  let component: AdoptionFormItemComponent;
  let fixture: ComponentFixture<AdoptionFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
