import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';

import {User} from '../../shared/user.model';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit, OnDestroy {
  subscription = new Subscription() ;
  user: User | null = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe( user => {
      if (!!user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGoogleSignIn(): void {
    this.authService.googleSignIn();
  }

  onLogout(): void{
    this.authService.logout();
  }

}
