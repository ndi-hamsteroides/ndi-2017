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

  constructor() { }

  ngOnInit() {
  }

  add() : void{
    if(!this.listPlayer){
      this.listPlayer=[];
    }
    this.listPlayer.push({
      name: this.newPlayer.name
    });

    this.newPlayer.name = '';

  }

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

}
