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

    gameInfo : string [] = ["categories", "creators", "platforms"];
    vgConsoles : string [] = ["nintendo","sony", "microsoft", "pc", "web", "mobile"];



    // categories: GameDescriptor [];
    categories = [];
    // categories = new VideoGameDescriptor();
    creators = [];
    platforms = [];


    nintendo;
    sony;
    microsoft;
    pc;
    mobile;
    web;

    constructor(
        fb : FormBuilder,
        private gameInfoService : GameInfoService) {

        // this.testingService.creators.subscribe(p => this.creators = p);
        // this.testingService.nintendo.subscribe(p => this.nintendo = p);
        // this.testingService.sony.subscribe(p => this.sony = p);
        // this.testingService.microsoft.subscribe(p => this.microsoft = p);
        // this.testingService.pc.subscribe(p => this.pc = p);
        // this.testingService.mobile.subscribe(p => this.mobile = p);
        // this.testingService.web.subscribe(p => this.web = p);

    
            // fetches the array of each game-info as observable subscription
            this.getAll();


    this.form = fb.group({

        categories : [this.categories],
        creators : [this.creators],
        platforms : [this.platforms]

        // nintendo : [this.nintendo],
        // sony : [this.sony],
        // microsoft : [this.microsoft],
        // pc : [this.pc],
        // mobile : [this.mobile],
        // web : [this.web]
    })

   }

   getAll() {   
    this.gameInfoService.getType$('category').subscribe(p => {
        this.categories = p});

    this.gameInfoService.getType$('creator').subscribe(p => {
        this.creators = p});
    
        this.gameInfoService.getType$('platform').subscribe(p => this.platforms = p);
    
   }

  ngOnInit(): void {
  }

  test() {
    console.log(this.form.value);
  }


  /* Suggest you make two methods for editing both title and description. then prompt the user if they want to replace it.
  no need to ever change type or uid, just delete it and start in a different type form. tf no need for PUT support 
   */


    editDescriptor(newValue : any, 
        infoType : string) {
        // another bad solution, revise later.
        if (infoType == 'categories') infoType = 'category';
        else if (infoType == 'creators') infoType = 'creator';
        else if (infoType == 'platforms') infoType = 'platform';
        const newObject = {
            uid : newValue.uid,
            type: infoType,
            title : newValue.title,
            description : newValue.description
        }
        // console.log(`uid : ${newObject.uid} \ntype : ${newObject.type}\ntitle : ${newObject.title}\ndescription : ${newObject.description}`)
        this.gameInfoService.update(newObject);
        this.getAll();
    } 

    deleteDescriptor(uid) {
        this.gameInfoService.delete(uid);
    }

    addNewDescriptor(newValue, infoType : string) {
        // another bad solution, revise later.
        if (infoType == 'categories') infoType = 'category';
        else if (infoType == 'creators') infoType = 'creator';
        else if (infoType == 'platforms') infoType = 'platform';
        const newEntry = {
            type : infoType,
            title : newValue.title,
            description : newValue.description
        }
        this.gameInfoService.add(newEntry);
        this.getAll();
    }
}
