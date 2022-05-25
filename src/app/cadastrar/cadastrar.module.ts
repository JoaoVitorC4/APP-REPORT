import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CadastrarPageRoutingModule } from './cadastrar-routing.module';

import { CadastrarPage } from './cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastrarPageRoutingModule
  ],
  declarations: [CadastrarPage]
})
export class CadastrarPageModule {}
