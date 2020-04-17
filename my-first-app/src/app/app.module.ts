import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';



import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
//import { FilterPipe } from './filter/pipes.component';
import { FilterPipe } from './filter/pipes.component';
import { LoginComponent } from './login/login.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ImagesComponent } from './images/images.component';
import { from } from 'rxjs';
import { SelecteItemComponent } from './selecte-item/selecte-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
const appRoutes:Routes=[
  {path:'user', component:UsersComponent},
  {path:'user/:id/:name', component:UsersComponent},
  {path:'', component:HomeComponent},
  {path:'server', component:ServerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FilterPipe,
    LoginComponent,
    EmployeeListComponent,
    ImagesComponent,
    SelecteItemComponent,
    CockpitComponent,
    ServerElementComponent,
    HomeComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
