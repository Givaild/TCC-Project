import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Camera } from './camera.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  baseUrl = "http://localhost:3001/cameras"

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg:string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(camera:Camera): Observable<Camera>{
    return this.http.post<Camera>(this.baseUrl,camera)
  }
  read(): Observable<Camera[]>{
    return this.http.get<Camera[]>(this.baseUrl)
  }
  readById(id: string): Observable<Camera> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Camera>(url)
  }
  update(camera: Camera): Observable<Camera> {
    const url = `${this.baseUrl}/${camera.id}`
    return this.http.put<Camera>(url,camera)
  }
}
