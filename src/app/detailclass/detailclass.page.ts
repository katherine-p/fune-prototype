import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detailclass',
  templateUrl: './detailclass.page.html',
  styleUrls: ['./detailclass.page.scss'],
})
export class DetailclassPage implements OnInit {

  emailhost="";
  emailmem="";
  em;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  deleteroom(){
    alert("suk delete");
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
