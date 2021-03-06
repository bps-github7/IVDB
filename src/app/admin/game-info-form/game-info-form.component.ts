import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { TestingService } from 'src/app/common/services/testing.service';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
// import { GameDescriptor } from 'src/app/models/content/GameDescriptor';
// import { GameInfo } from 'src/app/models/content/GameInfo';
// import { VgConsole } from 'src/app/models/content/VgConsole';

class VideoGameDescriptor implements GameDescriptor {
    title;
    description;
}

@Component({
  selector: 'app-game-info-form',
  templateUrl: './game-info-form.component.html',
  styleUrls: ['./game-info-form.component.css']
})
export class GameInfoFormComponent implements OnInit {

    form: any;

    // consoles is a aggregate of all the different possible consoles in lists below
    //so we will include it when categorizing a game, but not here where we are just
    //tracking different types of gameInfo
    gameInfo = ["categories", "creators", "nintendo","sony", "microsoft", "pc", "web", "mobile"];

    categories: GameDescriptor [];
    // categories = new VideoGameDescriptor();
    creators;

    nintendo;
    sony;
    microsoft;
    pc;
    mobile;
    web;

    constructor(
        fb : FormBuilder,
        private testingService : TestingService,
        private categoriesService : CategoriesService) {

        this.categoriesService.getAll$().subscribe(p => {
            console.log("categories service getAll$() ->" + p);
            this.categories = p});
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

        nintendo : [this.nintendo],
        sony : [this.sony],
        microsoft : [this.microsoft],
        pc : [this.pc],
        mobile : [this.mobile],
        web : [this.web]
    })

   }

  ngOnInit(): void {
  }

  test() {
    console.log(this.form.value);
  }

  editDescriptor(newValue) {
    //   find the item we want to replace
    // assign 
    console.log("editing!");
  }

  deleteDescriptor() {
      // find the item in question
      // delete it
      console.log("delete!");
  }

  addNewDescriptor(newDescriptor : string, infoType : string) {
    switch(infoType) {
        case "categories": {
            this.categories.push({ title : newDescriptor, description : ''});
            break;
            } 
        case "creators": {
            this.creators.push(newDescriptor);
            break
            } 
        case "nintendo": {
            this.nintendo.push(newDescriptor);
            break;
            }
        case "sony": {
            this.sony.push(newDescriptor);
            break;
            } 
        case "microsoft": {
            this.microsoft.push(newDescriptor);
            break;
            } 
        case "pc": {
            this.pc.push(newDescriptor);
            break;
            }
        case "mobile": {
            this.mobile.push(newDescriptor);
            break;
            }
        case "web": {
            this.web.push(newDescriptor);
            break;
            }
        }
    }



  save(gameInfo) {
      console.log("save");
  }

  delete() {
      // will need to take an argument
      console.log("delete");
  }

}
