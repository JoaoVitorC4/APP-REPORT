import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoAndarPage } from './segundo-andar.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoAndarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoAndarPageRoutingModule {}
