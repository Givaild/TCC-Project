import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CameraCrudComponent } from './views/camera-crud/camera-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"camera",
  component:CameraCrudComponent  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
