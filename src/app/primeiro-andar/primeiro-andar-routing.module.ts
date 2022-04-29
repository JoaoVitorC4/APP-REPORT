import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiroAndarPage } from './primeiro-andar.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiroAndarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiroAndarPageRoutingModule {}
