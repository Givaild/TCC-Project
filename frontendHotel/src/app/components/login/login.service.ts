import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "./login-read/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  baseUrl = "http://localhost:3001/users";

  constructor(private http: HttpClient) {}
  create(newUser: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl, newUser);
  }
}
