import { HeaderService } from "./../../components/template/header/header.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-camera-crud",
  templateUrl: "./camera-crud.component.html",
  styleUrls: ["./camera-crud.component.css"],
})
export class CameraCrudComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de nova câmera",
      icon: "videocam",
      routeUrl: "",
    };
  }

  navigateToCameraCreate(): void {
    this.router.navigate(["camera/create"]);
  }
}
