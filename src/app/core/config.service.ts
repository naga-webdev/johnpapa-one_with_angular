import { Injectable } from '@angular/core';
import { MdSnackBarConfig, MdSnackBar } from '@angular/material';

@Injectable()
export class ConfigService {
  snackConfig = new MdSnackBarConfig();
  apiUrl;
  todoUrl;
  // httpCacheDuration = 2000; // 1 minute
  delay = 2000;
  noOfUsers:number = 10;

  constructor() {
    this.snackConfig.duration = 2500;
    this.apiUrl = `https://randomuser.me/api/1.1/?results=${this.noOfUsers}&inc=gender,name,email,dob,phone,picture&noinfo`;
    this.todoUrl = 'file:///C:/Users/KBabu/Desktop/johnpapa/src/app/core/data.json';
  }
}
