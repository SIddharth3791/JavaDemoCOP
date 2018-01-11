import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './User';


@Injectable()
export class DataService {

  private usersUrl = 'api/user'; 

  constructor(private http: Http) { }

  getUser(): Promise<User[]>{

    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json() as User[])
    .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}


