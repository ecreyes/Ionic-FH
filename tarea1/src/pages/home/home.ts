import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PERSONAJES } from "../../data/personajes.data";
import { DetallePage } from "../detalle/detalle";
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personajes:any;

  constructor(public navCtrl: NavController) {
    this.personajes = PERSONAJES.slice(0);
  }

  mostrarPersonaje(personaje){
    this.navCtrl.push(DetallePage,{personaje});
  }
}
