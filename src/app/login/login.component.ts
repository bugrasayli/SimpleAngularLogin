import { Component, OnInit } from '@angular/core';
import { Admin } from '../Model/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin: Admin
  constructor() {
    this.admin = new Admin();
  }

  ngOnInit(): void {
  }
  Login(admin: Admin){
    console.log(admin);
  }

}
