import { Camera } from "./../camera.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CameraService } from "./../camera.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-camera-update",
  templateUrl: "./camera-update.component.html",
  styleUrls: ["./camera-update.component.css"],
})
export class CameraUpdateComponent {
  cameraUpdate: Camera = {
    camera: "",
    id: 0,
  };

  constructor(
    private CameraService: CameraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") ?? ""; // Adicionei ?? '' para tratar caso retorne null
    this.CameraService.readById(id).subscribe(
      (camera) => (this.cameraUpdate = camera)
    );
  }
  updateCamera(): void {
    this.CameraService.update(this.cameraUpdate).subscribe(() =>{
      this.CameraService.showMessage('Câmera Atualizada com sucesso')
      this.router.navigate(["/camera"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/camera"]);
  }
}
