import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.page.html',
  styleUrls: ['./createroom.page.scss', '../app.component.scss'],
})
export class CreateroomPage implements OnInit {
  memberbaru = false;
  txtemail = "";

  constructor(public toastController: ToastController) {}

  ngOnInit() {
  }


  addmember(){
    this.memberbaru = true;
    this.txtemail = "";
  }
  async copycode(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Unique Code is copied'
    });

    await toast.present();
  }

  async create(){
    const toast = await this.toastController.create({
      color: 'success',
      duration: 2000,
      message: 'New Romm is created !'
    });

    await toast.present();
  }

}
