import { Component, OnInit } from '@angular/core';
import {PlayerName} from "../playerName";


@Component({
  selector: 'app-sam-choice',
  templateUrl: './sam-choice.component.html',
  styleUrls: ['./sam-choice.component.css']
})
export class SamChoiceComponent implements OnInit {

  listPlayer : PlayerName[];
  newPlayer : PlayerName = {
    name: ''
  };

  sam : PlayerName;

  constructor() { }

  ngOnInit() {
  }

  /*Ajoute une personne à la liste des sams potentiels*/
  add() : void{
    if(!this.listPlayer){
      this.listPlayer=[];
    }
    this.listPlayer.push({
      name: this.newPlayer.name
    });

    this.newPlayer.name = '';

  }

  /*Vérifie que la personna n'a pas déjà été ajouté et sinon le bouton est désactivé*/
  alreadyExist():boolean
  {

    if(''== this.newPlayer.name){return true;}
    if(this.listPlayer){
      let user = this.listPlayer.find(x => x.name == this.newPlayer.name);

      if(user){return true;}
      else{return false;}
    }
    else{
      return false;
    }

  }

  /*Désactive le bouton s'il n'y à pas au moins 2 participants  ou plus de 10 participants*/
  moreThanTwoLessThanTen():boolean{
    if(!this.listPlayer){return true;}
    if(this.sam ){return true;}
    return this.listPlayer.length<2 || this.listPlayer.length>10;
  }

  /*Choisi le participant*/
  choose():void {
    if(this.listPlayer){
      let randomIndex = Math.floor((Math.random() * this.listPlayer.length) );
      this.sam =  this.listPlayer[randomIndex];
    }

  }

  //Supprimer le participant sélectionné
  erase(i):void{
    if(!this.sam){
      this.listPlayer.splice(i, 1);
    }

  }

}
