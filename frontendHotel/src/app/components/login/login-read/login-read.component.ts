import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { LoginModel } from '../login.model';

@Component({
  selector: 'app-login-read',
  templateUrl: './login-read.component.html',
  styleUrls: ['./login-read.component.css']
})
export class LoginReadComponent {

  constructor(private loginService: LoginService) {}

  usersRead: LoginModel[] = [];

  displayedColumns = ["email","tipo", "action"];

  ngOnInit():void {
    this.loginService.read().subscribe((users) =>{
      this.usersRead = users
    })
  }
}
