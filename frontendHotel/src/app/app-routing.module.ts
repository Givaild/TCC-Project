import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CameraCrudComponent } from './views/camera-crud/camera-crud.component';
import { CameraCreateComponent } from './components/camera/camera-create/camera-create.component';
import { CameraUpdateComponent } from './components/camera/camera-update/camera-update.component';
import { CameraDeleteComponent } from './components/camera/camera-delete/camera-delete.component';

const routes: Routes = [{
  path: "",
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
