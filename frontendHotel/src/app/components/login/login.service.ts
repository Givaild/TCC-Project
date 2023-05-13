import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoginModel } from "./login.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  baseUrl = "http://localhost:3001/users";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(newUser: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.baseUrl, newUser);
  }

  checkUser(email: string): Observable<boolean> {
    return this.http
      .get<LoginModel[]>(`${this.baseUrl}?email=${email}`)
      .pipe(
        map(users => users.length > 0)
      );
  }
  
  read(): Observable<LoginModel[]> {
    return this.http.get<LoginModel[]>(this.baseUrl)
  }

  readById(id: string):Observable<LoginModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<LoginModel>(url)
  }

  update(user: LoginModel):Observable<LoginModel> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<LoginModel>(url, user)
  }

  delete(id:string): Observable<LoginModel>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<LoginModel>(url)
  }
}
