import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoAndarPageRoutingModule } from './segundo-andar-routing.module';

import { SegundoAndarPage } from './segundo-andar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoAndarPageRoutingModule
  ],
  declarations: [SegundoAndarPage]
})
export class SegundoAndarPageModule {}
