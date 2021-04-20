import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../shared/user.model';
import {Subscription} from 'rxjs';
import {FormService} from '../form.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
  form.reset();
  this.router.navigate(['/pets']);
}
}
