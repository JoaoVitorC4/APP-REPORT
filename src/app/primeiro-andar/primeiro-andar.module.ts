import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroAndarPageRoutingModule } from './primeiro-andar-routing.module';

import { PrimeiroAndarPage } from './primeiro-andar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiroAndarPageRoutingModule
  ],
  declarations: [PrimeiroAndarPage]
})
export class PrimeiroAndarPageModule {}
