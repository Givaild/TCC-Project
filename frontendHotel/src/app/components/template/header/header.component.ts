import { Component, OnInit } from '@angular/core';
import { LoginInfo } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = '';

  userInfo: LoginInfo = {
    logged: false,
    user: {
      id: '',
      name: '',
      email: '',
      role: '',
    }
  }
  
  ngOnInit(): void {
    const storedUserInfo = localStorage.getItem('loginInfo');
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo)
    }
    const {user: {name}} = this.userInfo;
    this.user = name
  }
}
