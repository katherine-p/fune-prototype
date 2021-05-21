import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclassPage } from './myclass.page';

const routes: Routes = [
  {
    path: '',
    component: MyclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclassPageRoutingModule {}
