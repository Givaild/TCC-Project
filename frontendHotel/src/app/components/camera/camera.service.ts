import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Camera } from "./camera.model";
import { EMPTY, Observable, catchError, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  baseUrl = "http://localhost:3001/cameras";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-success"] : ["msg-error"],
    });
  }
  create(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(this.baseUrl, camera).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Camera> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Camera>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(camera: Camera): Observable<Camera> {
    const url = `${this.baseUrl}/${camera.id}`;
    return this.http.put<Camera>(url, camera).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Camera> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Camera>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
