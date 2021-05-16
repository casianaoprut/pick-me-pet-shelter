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
import {CarouselModule} from 'primeng/carousel';
import {GMapModule} from 'primeng/gmap';
import {SplitterModule} from 'primeng/splitter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SkeletonModule} from 'primeng/skeleton';

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
    SidebarModule,
    FileUploadModule,
    PanelModule,
    TagModule,
    CarouselModule,
    GMapModule,
    TagModule,
    SplitterModule,
    MessagesModule,
    MessageModule,
    SkeletonModule
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
    SidebarModule,
    FileUploadModule,
    PanelModule,
    TagModule,
    CarouselModule,
    GMapModule,
    TagModule,
    SplitterModule,
    MessagesModule,
    MessageModule,
    SkeletonModule
  ]
})
export class PrimengModule { }
