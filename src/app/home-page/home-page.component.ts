import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: User | null = null;
  subscription = new Subscription();

  constructor(
    private authService: AuthService
  ) {
    this.subscription = this.authService.user$.subscribe(resultUser => {
      if ( resultUser !== undefined){
        this.user = resultUser;
      } else {
        this.user = null;
      }
    });
  }

  ngOnInit(): void {
  }

}
