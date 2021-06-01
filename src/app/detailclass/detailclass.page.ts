import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailclass',
  templateUrl: './detailclass.page.html',
  styleUrls: ['./detailclass.page.scss'],
})
export class DetailclassPage implements OnInit {

  emailhost="";
  emailmem="";
  em;
  constructor(private alertCtrl: AlertController, public loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      cssClass: 'my-custom-class',
      message: '',
      duration: 800
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async deleteAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Delete',
      message: 'Are you sure to delete this class?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.presentLoading().then(()=> this.router.navigate(["home"]));
          }
        }
      ]
    });

    await alert.present();
  }

  deleteroom(){
    this.deleteAlert();
  }

  addhost(){
    this.em=true;
    this.presentPrompt();
  }

  addmem(){
    this.em=false;
    this.presentPrompt();
  }

  cancelhos(){
    this.emailhost="";
  }

  cancelmem(){
    this.emailmem="";
  }
  
  async presentPrompt() {
    let alert = this.alertCtrl.create({
      header: "Email",
      cssClass: 'my-custom-class',
      inputs: [
        {
          name: 'email',
          placeholder: 'abc@gmail.com'
        }
      ],
      buttons: [
        {
          text: 'Add',
          handler: data => {
            if(this.em){
              this.emailhost=data.email;
            }
            else{
              this.emailmem=data.email;
            }
          }
        }
      ]
    });
    (await alert).present();
  }
}
