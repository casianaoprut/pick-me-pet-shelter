import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit{

  isLoginMode = true;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onChangingMode(): void{
    this.isLoginMode = !this.isLoginMode;
  }
}
