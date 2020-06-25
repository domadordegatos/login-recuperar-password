import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgNeyderFilesDirective } from './directives/ng-neyder-files.directive';


@NgModule({
  declarations: [UploadImageComponent, NgNeyderFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
