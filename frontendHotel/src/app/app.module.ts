import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CameraCrudComponent } from './views/camera-crud/camera-crud.component';
import { CameraCreateComponent } from './components/camera/camera-create/camera-create.component'
import {MatButtonModule} from "@angular/material/button"
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CameraReadComponent } from './components/camera/camera-read/camera-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CameraUpdateComponent } from './components/camera/camera-update/camera-update.component';
import { CameraDeleteComponent } from './components/camera/camera-delete/camera-delete.component';
import { LoginCrudComponent } from './views/login-crud/login-crud.component';
import { LoginReadComponent } from './components/login/login-read/login-read.component';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LoginHomeComponent } from './components/login/login-home/login-home.component';
import { LoginUpdateComponent } from './components/login/login-update/login-update.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, CameraCrudComponent, CameraCreateComponent, CameraReadComponent, CameraUpdateComponent, CameraDeleteComponent, LoginCrudComponent, LoginReadComponent, LoginCreateComponent, LoginHomeComponent, LoginUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
