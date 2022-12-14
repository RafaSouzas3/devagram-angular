import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';
import { InputPublicoComponent } from './publico/input-publico/input-publico.component';
import { PaginaPublicaComponent } from './publico/pagina-publica/pagina-publica.component';
import { RodapePaginaPublicaComponent } from './publico/rodape-pagina-publica/rodape-pagina-publica.component';



@NgModule({
  declarations: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent
  ]
})
export class CompartilhadoModule { }