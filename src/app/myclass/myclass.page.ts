import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    // this.show= this.globalvar.getboolean();
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
}
