import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdSelectModule,
  MdTabsModule,
  MdToolbarModule,
  MdSnackBarModule
} from '@angular/material';

const modules = [
  CommonModule,
  FormsModule,
  HttpModule,
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdProgressBarModule,
  MdSelectModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  declarations: [],
})
export class SharedModule { }
