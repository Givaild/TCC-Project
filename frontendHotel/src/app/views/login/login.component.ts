import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private authService: AuthService){}
  email: string = '';
  password: string = '';

  login():void {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (response) => {
          if (response.length <= 0) {
            window.alert("E-mail ou senha inválidos, tente novamente")
          } else {
          const {password, ...userWithoutPassword } = response[0];
          const loginInfo = {
            logged: true,
            user: userWithoutPassword,
          }
          localStorage.setItem("loginInfo", JSON.stringify(loginInfo))}
        },
      })
  }
}