import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-crud",
  templateUrl: "./login-crud.component.html",
  styleUrls: ["./login-crud.component.css"],
})
export class LoginCrudComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(["/home"]);
  }
  navigateToLoginCreate(){
    this.router.navigate(["/login/create"])
  }
}
