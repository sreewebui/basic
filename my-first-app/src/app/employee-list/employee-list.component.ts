import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeList: EmployeeService) { }
public employee = [];
  ngOnInit() {
  this._employeeList.getEmployee().subscribe(data=>this.employee=data);
  }

}
