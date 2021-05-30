import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.page.html',
  styleUrls: ['./myclass.page.scss', '../app.component.scss'],
})
export class MyclassPage implements OnInit {
  btnid;
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    
  }

  clickedfav(event) {    
    this.btnid = event.srcElement.id;
    if(this.btnid == "btn1")
    {
      if(this.show1 == true)
      {
        this.show1 = false;
      }
      else
      {
        this.show1 = true;
      }
    }
    else if(this.btnid == "btn2")
    {
      if(this.show2 == true)
      {
        this.show2 = false;
      }
      else
      {
        this.show2 = true;
      }
    }
    else if(this.btnid == "btn3")
    {
      if(this.show3 == true)
      {
        this.show3 = false;
      }
      else
      {
        this.show3 = true;
      }
    }
    else if(this.btnid == "btn4")
    {
      if(this.show4 == true)
      {
        this.show4 = false;
      }
      else
      {
        this.show4 = true;
      }
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

  startnow()
  {
    this.presentLoading().then(() => { window.location.href = "http://localhost/fune" });
    
  }
}
