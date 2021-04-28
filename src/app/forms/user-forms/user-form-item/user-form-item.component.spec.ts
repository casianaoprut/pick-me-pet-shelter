import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormItemComponent } from './user-form-item.component';

describe('UserFormItemComponent', () => {
  let component: UserFormItemComponent;
  let fixture: ComponentFixture<UserFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
