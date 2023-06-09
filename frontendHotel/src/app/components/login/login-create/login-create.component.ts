import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginModel } from '../login.model';


@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent {

  userCreate: LoginModel = {
    id: 0,
    email: '',
    password: '',
    isAdmin: false
  }

  constructor(private loginService: LoginService, private router: Router){
    console.log('LoginCrudComponent carregado');
  }
  
  createUser(): void{
    this.userCreate.isAdmin = this.userCreate.isAdmin ? false : true;
    this.loginService.create(this.userCreate).subscribe(() => this.router.navigate(['/login']))
    this.loginService.showMessage("Usuário Cadastrado")
  }
  
}