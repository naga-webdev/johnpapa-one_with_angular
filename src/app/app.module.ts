import { environment } from './../environments/environment';
import { TodoDataService } from './services/todo-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ConfigService } from './core/config.service';
import { TodoComponent } from './todo/todo.component';
import { TodoChildComponent } from './todo/todo-child/todo-child.component';
import { InprogressChildComponent } from './todo/inprogress-child/inprogress-child.component';
import { DoneChildComponent } from './todo/done-child/done-child.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TodoComponent,
    TodoChildComponent,
    InprogressChildComponent,
    DoneChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [ConfigService, TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
