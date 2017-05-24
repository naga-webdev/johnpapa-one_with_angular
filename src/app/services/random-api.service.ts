import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../core/models/user';

import { ConfigService } from '../core/config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class RandomApiService {

  constructor(private http:Http, private configService:ConfigService) { }

  getRandomUsers():Observable<User[]>{
    return this.http.get(this.configService.apiUrl)
      .delay(this.configService.delay)
      .map((response: Response) => response.json().results);
  }

}
