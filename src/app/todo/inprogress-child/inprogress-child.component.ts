import { ConfigService } from './../../core/config.service';
import { MdSnackBar } from '@angular/material';
import { TodoDataService } from './../../services/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naga-inprogress-child',
  templateUrl: './inprogress-child.component.html',
  styleUrls: ['./inprogress-child.component.scss']
})
export class InprogressChildComponent implements OnInit {

  todos;

  constructor(private todoDataService:TodoDataService, private mdSnackBar:MdSnackBar, private configService:ConfigService) { }

  ngOnInit() {
    this.todoDataService.getTodoData()
      .subscribe( 
        data => {
        this.todos = data.filter( x => x.status === 'inprogress');
      },
      () => this.mdSnackBar.open('Todos failed!', 'ERROR', this.configService.snackConfig),
      () => this.mdSnackBar.open('Todos Loaded!', 'HTTP', this.configService.snackConfig)
      )
  }
}
