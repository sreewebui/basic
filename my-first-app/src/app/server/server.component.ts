import { Component} from "@angular/core";
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service'
import { Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    selector:"server-app",
    templateUrl:"./server.component.html",
    styleUrls:["./server.component.css"]
})
export class ServerComponent{
   
 constructor( private empData: EmployeeService, private router:Router, private route:ActivatedRoute ){
 }
 @Input() public parentData;
 @Output() public childEvent = new EventEmitter();
 fireEvent(){
    this.childEvent.emit("this is big title");
 }
 onReload(){
 this.router.navigate(['/server'],{relativeTo:this.route});
 alert("on reload button is clicked");
 }
 ngOnInit(){
    this.empData.getFacebookData().subscribe(data=>console.log("final response "+data));
 };
 
}