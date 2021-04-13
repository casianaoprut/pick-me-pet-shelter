import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
     private router: Router
  ){}

  ngOnInit(): void {
  }
  onHomePage(): void{
     this.router.navigate(['/home-page']);
  }

  onPetList(): void{
    this.router.navigate(['/pets']);
  }

  onAuth(): void{
    this.router.navigate(['/auth']);
  }
}
