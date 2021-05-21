import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  site;

  constructor(private popoverController: PopoverController, private router: Router, public alertController: AlertController, public loadingController: LoadingController) { }
  
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

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }
  createroom() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(["createroom"]);
  }
  joinclass() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(["joinclass"]);
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
