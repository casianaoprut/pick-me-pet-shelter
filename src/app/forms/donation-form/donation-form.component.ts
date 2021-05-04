import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css'],
  providers: [MessageService]
})
export class DonationFormComponent implements OnInit, OnDestroy {

  constructor(
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
  form.reset();
  this.messageService.clear();
  this.messageService.add({severity: 'success', summary: 'Thank you!', detail: 'You make a pet happy!'});
}

  ngOnDestroy(): void {
    this.messageService.clear();
  }
}
