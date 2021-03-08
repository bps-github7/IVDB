import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

    @Input() title : string
    @Input() posts: any = [];
    

    // @Output() post: string;
    @Output() newPostEvent = new EventEmitter<string>();
    @Output() deletePostEvent = new EventEmitter();
    @Output() editPostEvent = new EventEmitter<any>();
    
    showSubForm : boolean;



    constructor() {
    }

    edit(docUid, newTitle='', newDescription='') {
        // easier to add type after the event is emmited.
        const newDescriptor = {
            uid : docUid,
            title : newTitle,
            description : newDescription 
        }
        this.editPostEvent.emit(newDescriptor);
    }

    delete(uid) {
        if (confirm("are you sure you want to delete this entry (cannot undo)?"))
        this.deletePostEvent.emit(uid);
    }

    addPost(post : HTMLInputElement) {
        this.newPostEvent.emit(post.value);
        post.value = '';
        
    }

    ngOnInit(): void {
    }

}
