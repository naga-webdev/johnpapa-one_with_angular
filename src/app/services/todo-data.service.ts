import { Todo } from './../core/models/todo';
import { ConfigService } from './../core/config.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodoDataService {

 data:Todo[] =  [
        {"text":"Upload to github","status":"todo"},
        {"text":"Text areas should expand to fit their contents (no scroll bar)","status":"inprogress"},
        {"text":"Task deleition","status":"inprogress"},
        {"text":"Sub-tasks","status":"done"},
        {"text":"Better styles for the Project Title","status":"todo"}
    ]

    constructor(private http: Http, private configService:ConfigService) { }
    
    getTodoData():Observable<Todo[]>{
        // return this.http.get(this.configService.todoUrl)
        //     .map((response: Response) => response.json().todos);

       return new Observable( observer => {
           observer.next(this.data);
           observer.complete();
           observer.error();

        //    setTimeout( () => {
        //         observer.next(this.data);
        //    },2000);

        //    setTimeout( () => {
        //         observer.error("error occured");
        //    },7000);

        //    setTimeout( () => {
        //         observer.complete();
        //    },4000);

       })
    }
}