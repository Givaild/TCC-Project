import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { LoginModel } from '../login.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-delete',
  templateUrl: './login-delete.component.html',
  styleUrls: ['./login-delete.component.css']
})
export class LoginDeleteComponent {
   userDelete: LoginModel = {
     email: '',
     password: '',
     isAdmin: false,
     id: 0
   };
   constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.loginService.readById(id).subscribe(
      (user) => (this.userDelete = user)
    );
   }

   deleteUser(): void {
    this.loginService.delete(this.userDelete.id.toString()).subscribe(() => {
      this.loginService.showMessage("Usuário excluido com sucesso")
      this.router.navigate(["/login"])
    })
   }
   cancel(): void {
    this.router.navigate(["login"])
   }
}
