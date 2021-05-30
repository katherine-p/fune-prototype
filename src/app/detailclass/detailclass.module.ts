import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailclassPageRoutingModule } from './detailclass-routing.module';

import { DetailclassPage } from './detailclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailclassPageRoutingModule
  ],
  declarations: [DetailclassPage]
})
export class DetailclassPageModule {}
