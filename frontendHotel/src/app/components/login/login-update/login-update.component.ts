import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { LoginModel } from '../login.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-update',
  templateUrl: './login-update.component.html',
  styleUrls: ['./login-update.component.css']
})
export class LoginUpdateComponent {
  loginUpdate: LoginModel = {
    email: '',
    password: '',
    isAdmin: false,
    id: 0
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?? "";
    this.loginService.readById(id).subscribe(
     (user) => (this.loginUpdate = user) 
    )
  }
  updateUser(): void {
    this.loginService.update(this.loginUpdate).subscribe(() =>{
      this.loginService.showMessage("Usuário Atualizado")
      this.router.navigate(['login'])
    })
  }
  cancel() {
    this.router.navigate(['login'])
  }
}
