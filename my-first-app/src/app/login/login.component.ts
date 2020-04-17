import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor() { };
userProfileLogin = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  checked: new FormControl('',Validators.required)
});
onSubmit(){
  console.log(this.userProfileLogin.value.email);
  console.log(this.userProfileLogin.controls["email"].value);
}
  ngOnInit(): void {
  }

}
