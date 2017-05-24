import { Observable } from 'rxjs/Observable';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { RandomApiService } from '../../services/random-api.service';

import { User } from '../../core/models/user';

import { ConfigService } from '../../core/config.service';


@Component({
  selector: 'naga-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[RandomApiService]
})
export class UsersComponent implements OnInit,OnDestroy {

  users:User[];
  selectedUser:User;
  randomuserSub;

  constructor(private randomApiService:RandomApiService, private mdSnackBar:MdSnackBar, private configService:ConfigService) { }

  ngOnInit() {
    this.randomuserSub = this.randomApiService.getRandomUsers();
    this.randomuserSub.subscribe(
        users => this.users = users,
        () => this.mdSnackBar.open('Users failed!', 'ERROR', this.configService.snackConfig),
        () => this.mdSnackBar.open('Users Loaded!', 'HTTP', this.configService.snackConfig)
      );
  }

  selectUser(user:User){
    this.selectedUser = user;
  }

  ngOnDestroy(){

  }

}
