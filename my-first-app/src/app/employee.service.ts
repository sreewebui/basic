import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee }  from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService{
    constructor(private http:HttpClient){}
  private _url = "./assets/data/employee.json";
  private faceUrl="https://graph.facebook.com/groups/128558210613071/";
  private tableUrl = "https://api.myjson.com/bins/15psn9";
  public getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  } 
  obj={};
  public getFacebookData(): Observable<any[]>{
      return this.http.get<any[]>(this.faceUrl);
  }
  public getTableData(): Observable<any[]>{
    return this.http.get<any[]>(this.tableUrl);
  }
      
    
}
