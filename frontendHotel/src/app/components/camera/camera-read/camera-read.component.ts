import { Camera } from "./../camera.model";
import { CameraService } from "./../camera.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-camera-read",
  templateUrl: "./camera-read.component.html",
  styleUrls: ["./camera-read.component.css"],
})
export class CameraReadComponent implements OnInit {
  
  camerasRead: Camera[] = [];
  displayedColumns = ['id','cameras','action']

  constructor(private CameraService: CameraService) {}

  ngOnInit(): void {
    this.CameraService.read().subscribe((cameras) => {
      this.camerasRead = cameras;
    });
  }
}
