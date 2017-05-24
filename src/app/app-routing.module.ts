import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { DoneChildComponent } from './todo/done-child/done-child.component';
import { InprogressChildComponent } from './todo/inprogress-child/inprogress-child.component';
import { TodoChildComponent } from './todo/todo-child/todo-child.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'todo', component: TodoComponent,
    children:[
      // { path: '', pathMatch: 'full', redirectTo: 'todo' },
      { path: 'todo', component: TodoChildComponent },
      { path: 'inprogress', component: InprogressChildComponent },
      { path: 'done', component: DoneChildComponent },
    ]
  },
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule' }, //lazyloading
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
