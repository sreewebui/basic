import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  navigateServer(id){
    console.log(this.router.navigated)
 this.router.navigate(['/user',id,'editable Prams'],{queryParams:{allowEdit:1},fragment:"loading"})
  }
  ngOnInit(): void {
  }

}
