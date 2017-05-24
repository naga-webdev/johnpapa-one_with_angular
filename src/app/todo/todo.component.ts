import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naga-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tabLinks;

  constructor() {
    this.tabLinks = [
      {tabShowLink : 'Todo', tabLink : 'todo'},
      {tabShowLink : 'InProgress', tabLink : 'inprogress'},
      {tabShowLink : 'Done', tabLink : 'done'}
    ]
   }

  ngOnInit() {
  }

}
