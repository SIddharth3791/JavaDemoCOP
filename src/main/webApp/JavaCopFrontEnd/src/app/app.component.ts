import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit  {
  
  users: User[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUser();
 }


 getUser(){
  return this.dataService.getUser().then(users => this.users = users);
 }
}
