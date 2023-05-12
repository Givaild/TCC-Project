import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CameraCrudComponent } from './views/camera-crud/camera-crud.component';
import { CameraCreateComponent } from './components/camera/camera-create/camera-create.component';
import { CameraUpdateComponent } from './components/camera/camera-update/camera-update.component';
import { CameraDeleteComponent } from './components/camera/camera-delete/camera-delete.component';
import { LoginCrudComponent } from './views/login-crud/login-crud.component';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LoginHomeComponent } from './components/login/login-home/login-home.component';

const routes: Routes = [{
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
},
{
  path:"camera/update/:id",
  component:CameraUpdateComponent
},
{
  path:"camera/delete/:id",
  component:CameraDeleteComponent
},
{
  path:"login",
  component:LoginCrudComponent
},
{
  path:"login/create",
  component:LoginCreateComponent
},
{
  path:"",
  component:LoginHomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
