import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-croper',
  templateUrl: './image-croper.component.html',
  styleUrls: ['./image-croper.component.scss'],
})
export class ImageCroperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(event.target.files);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
