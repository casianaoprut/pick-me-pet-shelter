import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-email-log-in',
  templateUrl: './email-log-in.component.html',
  styleUrls: ['./email-log-in.component.css']
})
export class EmailLogInComponent implements OnInit {
  user: User | undefined | null;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  onLogIn(form: NgForm): void{
    this.authService.emailLogIn(form.value.email, form.value.password);
  }
}
