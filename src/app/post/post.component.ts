import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

    /* Simple, reusable component for listing collected information
    type something at the top, press enter and it will be added to list.
    The list can be exported as an array and used as a form control (future iters.) 
    */

    @Input() currentTitle : string;
    @Input() currentDescription : string;

    @Input() title : string
    @Input() posts: any = [];
    

    // need a way to tell the child 'descriptor-form' that its editing and not adding 
    descriptorEditingMode : boolean = false;

    // @Output() post: string;
    @Output() newPostEvent = new EventEmitter<string>();
    @Output() deletePostEvent = new EventEmitter();
    @Output() editPostEvent = new EventEmitter<any>();
    

    

    // gets populated with title and desc of entry we want to edit
    // then sent to descriptor form.
    selected : any;

    constructor(private gameInfoService : GameInfoService) {
    }

    addPost(post) {
        this.newPostEvent.emit(post);
    }

    triggerDescriptorForm(title, uid) {
        this.gameInfoService.getDocument$(title).subscribe(p => {
            this.selected = {'uid' : uid, 'title' : p[0].title, 'description' : p[0].description };        
        })
        this.descriptorEditingMode = true;
    }

    //is this fn in use anymore?
    editPost(newEntry) {
        this.descriptorEditingMode = false;
        this.editPostEvent.emit(newEntry);
    }


    deletePost(uid) {
        if (confirm("are you sure you want to delete this entry (cannot undo)?"))
        this.deletePostEvent.emit(uid);
    }

}
