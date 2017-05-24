import { ConfigService } from './../../core/config.service';
import { MdSnackBar } from '@angular/material';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naga-done-child',
  templateUrl: './done-child.component.html',
  styleUrls: ['./done-child.component.scss']
})
export class DoneChildComponent implements OnInit {
  
  todos;

  constructor(private todoDataService:TodoDataService, private mdSnackBar:MdSnackBar, private configService:ConfigService) { }

  ngOnInit() {
    this.todoDataService.getTodoData()
      .subscribe( 
        data => {
        this.todos = data.filter( x => x.status === 'done');
      },
      () => this.mdSnackBar.open('Todos failed!', 'ERROR', this.configService.snackConfig),
      () => this.mdSnackBar.open('Todos Loaded!', 'HTTP', this.configService.snackConfig)
      )
  }
}
