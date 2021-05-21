import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss', '../app.component.scss'],
})
export class SigninPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public loadingController: LoadingController) { }

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

  login()
  {
    this.presentLoading().then(() => this.router.navigate(["/home"]));
    
  }

  signup()
  {
    this.router.navigate(["/signup"]);
  }

}
