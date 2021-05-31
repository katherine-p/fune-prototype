import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { GlobalvarService } from '../globalvar.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  site;
  modekids;

  constructor(private popoverController: PopoverController, private router: Router, public alertController: AlertController, public loadingController: LoadingController, public globalvar: GlobalvarService) {
    this.modekids = globalvar.modekids;
    //alert(this.modekids);
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sign Out Account',
      message: '<strong>Are you sure to sign out your account?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.presentLoading().then(()=> this.router.navigate(["signin"]));
            
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
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

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Secured!',
      inputs: [
        {
          name: 'Password',
          type: 'password',
          placeholder: 'Input your password'
        },        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
            this.popoverController.dismiss();
            this.router.navigate(["createroom"]);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }
  createroom() {
    // code for setting wifi option in apps
    //alert(this.modekids);
    // Modekids OFF
    if(this.modekids == true)
    {
      this.popoverController.dismiss();
      this.router.navigate(["createroom"]);
    }
    //Modekids ON
    else{
      this.presentAlertPrompt()
    }
    
  }
  joinclass() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.presentAlert();
  }

  

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Room's Code",
      inputs: [
        {
          name: 'kode',
          placeholder: 'ASD12'
        }
      ],
      buttons: ['Join Now']
    });

    await alert.present();
  }

  myclass() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(["myclass"]);
  }

  logout() {
    // code for logout
    //alert("masuk");
    this.presentAlertConfirm();
    this.popoverController.dismiss();
    
    
  }

  eventFromPopover() {
    this.popoverController.dismiss('edupala.com');
  } 

}
