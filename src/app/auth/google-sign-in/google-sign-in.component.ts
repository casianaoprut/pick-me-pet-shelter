import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onGoogleSignIn(): void {
    this.authService.googleSignIn().then(() => {
        this.location.back();
      }
    );
  }

}
