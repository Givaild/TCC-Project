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
}