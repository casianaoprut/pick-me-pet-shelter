import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionsListComponent } from './adoptions-list.component';

describe('AdoptionsListComponent', () => {
  let component: AdoptionsListComponent;
  let fixture: ComponentFixture<AdoptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
