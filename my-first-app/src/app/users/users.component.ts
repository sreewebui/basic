import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
 users=[
   {id:1,name:'sreekanth'},
   {id:2,name:'keerthi'},
   {id:3,name:'vyshu'}
  ];
  ngOnInit(): void {
  }

}
