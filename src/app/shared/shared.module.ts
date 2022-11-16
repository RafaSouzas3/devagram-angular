import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AvatarComponent,
    UploadImagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
