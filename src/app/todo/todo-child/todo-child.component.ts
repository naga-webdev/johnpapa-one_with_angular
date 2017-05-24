import { MdSnackBar } from '@angular/material';
import { ConfigService } from './../../core/config.service';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naga-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.scss']
})
export class TodoChildComponent implements OnInit {

  todos;

  constructor(private todoDataService:TodoDataService, private mdSnackBar:MdSnackBar, private configService:ConfigService) { }

  ngOnInit() {
    this.todoDataService.getTodoData()
      .subscribe( 
        data => {
        this.todos = data.filter( x => x.status === 'todo');
      },
      () => this.mdSnackBar.open('Todos failed!', 'ERROR', this.configService.snackConfig),
      () => this.mdSnackBar.open('Todos Loaded!', 'HTTP', this.configService.snackConfig)
      )
  }

}
