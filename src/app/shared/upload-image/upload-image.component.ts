import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from './models/file-item';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [StorageService],
})
export class UploadImageComponent{
  files:FileItem[]=[];
  isOverDrop = false;
  constructor(private readonly storageSvc: StorageService) { }

  onUpload(){
    this.storageSvc.uploadImage(this.files);
  }
}
