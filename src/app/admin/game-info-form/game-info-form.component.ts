import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { GameInfoService } from 'src/app/common/services/gameinfo.service';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
// import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
// import { GameInfo } from 'src/app/models/content/GameInfo';
// import { VgConsole } from 'src/app/models/content/VgConsole';

// class VideoGameDescriptor implements GameDescriptor {
//     title;
//     description;
// }

@Component({
  selector: 'app-game-info-form',
  templateUrl: './game-info-form.component.html',
  styleUrls: ['./game-info-form.component.css']
})
export class GameInfoFormComponent implements OnInit {

    form: any;

    gameInfo : string [] = ["categories", "creators", "console_makers"];
    vgConsoles : string [] = ["nintendo","sony", "microsoft", "pc", "web", "mobile"];



    // categories: GameDescriptor [];
    categories = [];
    // categories = new VideoGameDescriptor();
    creators = [];
    console_makers = [];

    some_category;
    some_creator;
    some_creator_id;


    nintendo;
    sony;
    microsoft;
    pc;
    mobile;
    web;

    constructor(
        fb : FormBuilder,
        private gameInfoService : GameInfoService) {

        this.gameInfoService.getType$('category').subscribe(p => {
            this.categories = p});
        this.gameInfoService.getDocument$('adventure','category').subscribe(p => this.some_category = p[0]);
        this.gameInfoService.getType$('creator').subscribe(p => {
            this.creators = p});
        this.gameInfoService.getType$('console_maker').subscribe(p => this.console_makers = p);
        // this.testingService.creators.subscribe(p => this.creators = p);
        // this.testingService.nintendo.subscribe(p => this.nintendo = p);
        // this.testingService.sony.subscribe(p => this.sony = p);
        // this.testingService.microsoft.subscribe(p => this.microsoft = p);
        // this.testingService.pc.subscribe(p => this.pc = p);
        // this.testingService.mobile.subscribe(p => this.mobile = p);
        // this.testingService.web.subscribe(p => this.web = p);

    



    this.form = fb.group({

        categories : [this.categories],
        creators : [this.creators],

        // nintendo : [this.nintendo],
        // sony : [this.sony],
        // microsoft : [this.microsoft],
        // pc : [this.pc],
        // mobile : [this.mobile],
        // web : [this.web]
    })

   }

  ngOnInit(): void {
  }

  test() {
    console.log(this.form.value);
  }


  /* Suggest you make two methods for editing both title and description. then prompt the user if they want to replace it.
  no need to ever change type or uid, just delete it and start in a different type form. tf no need for PUT support 
   */


    editDescriptor(newTitle : any, 
        descriptorType : string) {
        
        //temporary shortcut! do better in production !!!
        const newObject = {
            uid : '3gyqwF9lencFwInCfHjx',
            type: 'category',
            title : newTitle,
            description : 'abcdefg'
        }
        this.gameInfoService.update(newObject);
    
    } 

    deleteDescriptor(uid, descriptorType) {
        this.gameInfoService.delete(uid);
    }

    addNewDescriptor(newDescriptor : string, infoType : string) {
        this.categories.push({ title : newDescriptor, description : ''});
    }



  save(gameInfo) {
      console.log("save");
  }

  delete() {
      // will need to take an argument
      console.log("delete");
  }

}
