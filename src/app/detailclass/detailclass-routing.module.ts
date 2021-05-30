import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailclassPage } from './detailclass.page';

const routes: Routes = [
  {
    path: '',
    component: DetailclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailclassPageRoutingModule {}
