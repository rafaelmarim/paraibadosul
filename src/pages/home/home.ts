import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nome_usuario:string = "Paraíba do Sul";

  constructor(public navCtrl: NavController) {

  }

}
