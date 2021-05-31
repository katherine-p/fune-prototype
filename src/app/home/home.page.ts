import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../app.component.scss'],
})
export class HomePage {
  modestat;
  popup = false;

  constructor(public popoverController: PopoverController, public modalController: ModalController, public alertController: AlertController, public loadingController: LoadingController, public globarvar: GlobalvarService) {
    this.modestat = this.globarvar.modekids;
  }

  // ngOnInit()
  // {
  //   this.presentAlert();
  // }

  async settingsPopover(ev: any) {
    // const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      animated: false,
      cssClass: 'bottom-sheet-popover',
      // componentProps: {
      //   site: siteInfo
      // },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'WELCOME',
      subHeader: 'Katherine!',
      message: 'Click screen to dismiss idk if I should use this',
      backdropDismiss: true
    });
    await alert.present();
    // setTimeout(() => {
    //   alert.dismiss();
    // }, 1000);

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  ablekid(){
    if(this.modestat == true)
    {
      this.modestat = false;
      this.globarvar.modekids = false;
    }
    else
    {
      this.modestat = true;
      this.globarvar.modekids = true;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      cssClass: 'my-custom-class',
      message: 'Joining class',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  gotomeet(){
    this.presentLoading().then(() => { window.location.href = "http://localhost/fune" });
  }
}
