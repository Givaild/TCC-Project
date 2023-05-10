import { Camera } from "./../camera.model";
import { CameraService } from "./../camera.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-camera-read",
  templateUrl: "./camera-read.component.html",
  styleUrls: ["./camera-read.component.css"],
})
export class CameraReadComponent implements OnInit {
  @ViewChild("videoElement") videoElement!: ElementRef;
  private stream!: MediaStream | null;

  camerasRead: Camera[] = [];
  displayedColumns = ["id", "cameras", "action"];

  constructor(private CameraService: CameraService) {}
  
  startWebcam() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const video = this.videoElement.nativeElement;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => console.error(err));
    }
  }

  ngOnDestroy() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }

  stopWebcam() {
    location.reload();
  }

  ngOnInit(): void {
    this.CameraService.read().subscribe((cameras) => {
      this.camerasRead = cameras;
    });
  }
}
