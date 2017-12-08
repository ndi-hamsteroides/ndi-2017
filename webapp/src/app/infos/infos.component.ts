import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {TestGetService} from "../test-get.service";
import {Info} from "../infos";

export const INFOS: Info[] = [{text : "Saviez-vous qu'avec La poste vous pouvez passer votre code pour 30 euros seulement ?"},
  {text :"Saviez-vous que 85 % des accidents liés à l'alcool sont provoqués par des buveurs occasionnels ?"},
  {text :"Saviez-vous qu'avant 1990 le port de la ceinture n'était pas obligatoire à l'arrière ?"},
  {text :"Saviez-vous que l'abus d'alcool représente 30 % accidents mortels ?"},
  {text :"Saviez-vous que 58,4% des accidents mortels de jeunes de 18-24ans se passent la nuit ?"},
  {text :"Saviez-vous que 30,4% des personnes tuées dans un accident mortel avec alcool ne portaient pas de ceinture de sécurité ?"},
  {text :"En 2005 un suisse était tellement en retard pour son rdv au restaurant, qu'il a décidé de venir avec sa voiture mais dans le restaurant"},
  {text :"Saviez-vous que SAM c'est celui qui ne boit pas ?"},
  {text :"Saviez-vous que conduire sans les mains augmente de 98,7% vos chance d'avoir un accident ?"},
  {text :"Saviez-vous que en mai 2017, un passager a essyayer de faire raper son pieds au sol pendant que la voiture était en marche malheuresment pour lui son véhicule se déplacer à 130 km/h et sa jambe a été arraché nette ?"},
  {text :"Saviez-vous que 100 % des accidents routiers sont des accidents qui arrivent sur la route ?"},
  {text :"Saviez-vous qu'un joint de canabis présente des effets équivalents à une alcoolémie entre 0,3 g/l et 0,7 g/l"},
  {text :"Saviez-vous que lorsque l'on est dans les bouchons, on anvance moins vite que d'habitude ?"}];

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  info : Info;

  constructor(private location: Location,
              private testGet: TestGetService) { }

  ngOnInit() {
    this.choose();
  }

  //Tire une infos aux hazards
  shuffle(): void {

  }

  /*Choisi une info au hazard*/
  choose():void {
    if(INFOS){
      let randomIndex = Math.floor((Math.random() * INFOS.length) );
      this.info =  INFOS[randomIndex];
    }


  }

}
