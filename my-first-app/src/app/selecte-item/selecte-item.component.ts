import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-selecte-item',
  templateUrl: './selecte-item.component.html',
  styleUrls: ['./selecte-item.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SelecteItemComponent implements OnInit {

  constructor(private empService:EmployeeService) { }
public data = [];
public selectedName;
public searchItem;
changeValue(ev){
  console.dir(ev);
}
  ngOnInit() {
    this.empService.getEmployee().subscribe((data)=>{
      this.data=data
      //console.log(this.data);
    });
    
  }

}
