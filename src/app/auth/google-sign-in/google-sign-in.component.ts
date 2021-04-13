import {Component, OnInit} from '@angular/core';
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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onGoogleSignIn(): void {
    this.authService.googleSignIn().then(() => {
        this.router.navigate(['/home-page']);
      }
    );
  }

  onLogout(): void{
    this.authService.logout();
  }

}
