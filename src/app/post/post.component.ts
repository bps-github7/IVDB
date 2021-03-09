import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    /* Simple, reusable component for listing collected information
    type something at the top, press enter and it will be added to list.
    The list can be exported as an array and used as a form control (future iters.) 
    */

    @Input() currentTitle : string;
    @Input() currentDescription : string;

    @Input() title : string
    @Input() posts: any = [];
    

    // @Output() post: string;
    @Output() newPostEvent = new EventEmitter<string>();
    @Output() deletePostEvent = new EventEmitter();
    @Output() editPostEvent = new EventEmitter<any>();
    
    showRest : boolean = false;
    formReady : boolean = false;


    // gets populated with title and desc of entry we want to edit
    // then sent to descriptor form.
    selected : any;

    constructor(private gameInfoService : GameInfoService) {
    }

    edit(docUid) {
        console.log(`searching with ${docUid}`);
        this.gameInfoService.getDocument$(docUid, 'category').subscribe(p => {
            
            // like it if we could get rid of that subscript syntax.
            this.selected = p;
        })
        console.log(`${this.selected.title}`);


    
        // Need to get the item that was selected.
        


        // this.editPostEvent.emit(newDescriptor);
    }

    completionCheck(newTitle = '', newDescription = '') {
        /* No return value or actions taken by this method yet
        it needs to call update method if the right tests are
        passed. 
         */
        if (newTitle && newDescription) {
            if (newTitle == this.currentTitle)
                alert('new title and old title are the same.');
            if (newDescription == this.currentDescription) 
                alert('new description and old description are the same.');
            // this.edit()
        } else {
            if (newTitle == '' || newTitle == ' ') {
                if (this.currentTitle == '')
                    console.log("then nothing changed")
                if (confirm("are you sure you want to delete the existing title for this entry?"))
                    console.log("pancake grease")}
            else if (newDescription == '' || newDescription == ' ') {
                if (this.currentDescription == '')
                    console.log("then nothing changed")
                if (confirm("are you sure you want to delete the existing description for this entry?"))
                    console.log("pancake grease")}
        }
        
        // const  newPost = { title : newTitle, description : newDescription }
        //  this.update(newPost);

    }


    delete(uid) {
        if (confirm("are you sure you want to delete this entry (cannot undo)?"))
        this.deletePostEvent.emit(uid);
    }

    addPost(post : HTMLInputElement) {
        this.newPostEvent.emit(post.value);
        post.value = '';
        
    }

    // update(post : any) {
    //     this.editPostEvent.emit(post)
    // }

    ngOnInit(): void {
    }

}
