import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
@ViewChild("agGrid") agGrid:AgGridAngular;
  constructor(private _EmpSevice:EmployeeService) { }
  

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
getSelectedRows(){
  console.log(this.agGrid.api.getSelectedNodes())
}

public coloumnDefs = [ {headerName: 'Make', field: 'make', sortable: true, filter: true},
{headerName: 'Model', field: 'model', sortable: true, filter: true},
{headerName: 'Price', field: 'price', sortable: true, filter: true, checkboxSelection: true}]
  ngOnInit() {
     this._EmpSevice.getTableData().subscribe(data=>{
      this.rowData=data;
      //console.log(data);
     }
      );
     
  }

}
