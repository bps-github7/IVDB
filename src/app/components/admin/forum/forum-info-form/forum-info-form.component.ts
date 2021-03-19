import { Component, OnInit } from '@angular/core';
import { ForumInfoService } from 'src/app/common/services/forum-info.service';

@Component({
  selector: 'app-forum-info-form',
  templateUrl: './forum-info-form.component.html',
  styleUrls: ['./forum-info-form.component.css']
})
export class ForumInfoFormComponent implements OnInit {

    allMetadata : any [];
    categories : any [];
    prefixes : any [];
    types : any [];

    //forums : any [];
    //threads : any [];



    constructor(private forumInfoService : ForumInfoService) {
        this.forumInfoService.metadata$.subscribe(p => this.allMetadata = p);
        this.getAll()
    }

    ngOnInit(): void {
    }

    getAll() {
        this.forumInfoService.categories$.subscribe(p => this.categories = p);
        this.forumInfoService.prefixes$.subscribe(p => this.prefixes = p);
        this.forumInfoService.types$.subscribe(p => this.types = p);
    }


    editDescriptor(newValue : any, 
        infoType : string) {
        const newObject = {
            uid : newValue.uid,
            type: infoType,
            title : newValue.title,
            description : newValue.description
        }
        // console.log(`uid : ${newObject.uid} \ntype : ${newObject.type}\ntitle : ${newObject.title}\ndescription : ${newObject.description}`)
        this.forumInfoService.update(newObject);
        
        
        this.getAll();
    } 

    deleteDescriptor(uid) {
        this.forumInfoService.delete(uid);
    }

    addNewDescriptor(newValue, infoType : string) {
        const newEntry = {
            type : infoType,
            title : newValue.title,
            description : newValue.description
        }
        this.forumInfoService.add(newEntry);
        this.getAll();
    }
}
