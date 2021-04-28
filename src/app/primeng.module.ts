import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {SidebarModule} from 'primeng/sidebar';
import {PanelModule} from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    RippleModule,
    RadioButtonModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    SidebarModule,
    FileUploadModule,
    PanelModule,
    TagModule
  ],
  exports: [
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    CommonModule,
    RippleModule,
    RadioButtonModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    SidebarModule,
    FileUploadModule,
    PanelModule,
    TagModule
  ]
})
export class PrimengModule { }
