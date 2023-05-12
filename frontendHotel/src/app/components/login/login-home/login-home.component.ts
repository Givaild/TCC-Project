import { Component } from "@angular/core";
import { LoginModel } from "../login.model";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-home",
  templateUrl: "./login-home.component.html",
  styleUrls: ["./login-home.component.css"],
})
export class LoginHomeComponent {
  userHome: LoginModel = {
    email: "",
    password: "",
    isAdmin: false,
    id: 0,
  };
  constructor(private loginService: LoginService, private router: Router) {}

  validateUser(): void {
    this.loginService.checkUser(this.userHome.email).subscribe((userExists) => {
      if (userExists) {
        this.router.navigate(["/home"]);
      } else {
       this.loginService.showMessage("Usuário não cadastrado ou senha incorreta")
      }
    });
  }
}

