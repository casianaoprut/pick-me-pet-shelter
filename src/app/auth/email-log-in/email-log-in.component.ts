import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../shared/user.model';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-email-log-in',
  templateUrl: './email-log-in.component.html',
  styleUrls: ['./email-log-in.component.css']
})
export class EmailLogInComponent implements OnInit {
  user: User | undefined | null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  onLogIn(form: NgForm): void{
    this.authService.emailLogin(form.value.email, form.value.password).catch(error => {
      this.messageService.add({severity: 'error', summary: 'Error:', detail: error.message});
    }).then(); // TODO Add navigate back.
  }
}
