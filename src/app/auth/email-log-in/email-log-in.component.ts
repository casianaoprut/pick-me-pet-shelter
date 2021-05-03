import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../shared/user.model';
import {ActivatedRoute, Router} from '@angular/router';
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
    private route: ActivatedRoute,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  onLogIn(form: NgForm): void{
    let isError = false;
    this.authService.emailLogin(form.value.email, form.value.password).catch(error => {
      isError = true;
      this.messageService.clear();
      this.messageService.add({severity: 'error', summary: 'Error:', detail: error.message});
    }).then(() => {
      if (!isError){
        this.route.queryParams.subscribe(params => {
          if (params.returnUrl !== undefined) {
            this.router.navigate(['/'  + params.returnUrl]);
          } else {
            this.router.navigate(['/home-page']);
          }
        });
      }
    });
  }
}
