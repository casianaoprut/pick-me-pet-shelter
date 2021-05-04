import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  user: User | null = null;
  subscription = new  Subscription();

  constructor(
     private router: Router,
     private authService: AuthService
  ){
    this.subscription = this.authService.user$.subscribe(resultUser => {
      if ( resultUser !== undefined){
        this.user = resultUser;
      } else {
        this.user = null;
      }
    });
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
  }

  onLogout(): void{
    this.authService.logout().then(() => window.location.reload());
  }

}
