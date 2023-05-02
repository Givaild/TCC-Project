import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CameraCrudComponent } from './views/camera-crud/camera-crud.component';
import { CameraCreateComponent } from './components/camera/camera-create/camera-create.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"camera",
    component:CameraCrudComponent  
  },
  {
    path:"camera/create",
    component:CameraCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
