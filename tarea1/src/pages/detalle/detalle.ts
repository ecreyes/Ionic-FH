import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  personaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = navParams.get('personaje');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
