import { Camera } from "./../camera.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CameraService } from "./../camera.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-camera-delete",
  templateUrl: "./camera-delete.component.html",
  styleUrls: ["./camera-delete.component.css"],
})
export class CameraDeleteComponent {
  cameraDelete: Camera = {
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
      (camera) => (this.cameraDelete = camera)
    );
  }
  deleteCamera(): void {
    this.CameraService.delete(this.cameraDelete.id.toString()).subscribe(()=>{
      this.CameraService.showMessage("Câmera excluida com sucesso")
      this.router.navigate(["/camera"]);
    })
  }
  cancel(): void {
    this.router.navigate(["/camera"]);
  }
}
