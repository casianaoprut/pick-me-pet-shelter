import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLogInComponent } from './email-log-in.component';

describe('EmailLogInComponent', () => {
  let component: EmailLogInComponent;
  let fixture: ComponentFixture<EmailLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
