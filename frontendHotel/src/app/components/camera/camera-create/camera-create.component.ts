import { Router } from "@angular/router";
import { CameraService } from "./../camera.service";
import { Component } from "@angular/core";
import { Camera } from "../camera.model";

@Component({
  selector: "app-camera-create",
  templateUrl: "./camera-create.component.html",
  styleUrls: ["./camera-create.component.css"],
})
export class CameraCreateComponent {
  cameraTest: Camera = {
    camera: "",
    id: 0
  };

  constructor(private cameraService: CameraService, private router: Router) {}

  createCamera(): void {
    this.cameraService.create(this.cameraTest).subscribe(() => {
      this.cameraService.showMessage("Camera Cadastrada");
      this.router.navigate(['/camera']);
    });
  }
  cancel(): void {
    this.router.navigate(['camera']);
  }
}
