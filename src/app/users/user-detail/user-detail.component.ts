import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../core/models/user';

@Component({
  selector: 'naga-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
