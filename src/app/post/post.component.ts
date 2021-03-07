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
    
    constructor() {
    }

    edit(uid) {
        // lets just use a dropdown form in the future
        let newTitle = prompt("provide new title for update:");
        let newDescription = prompt("Provide new description for update (optional):")
        console.log(`post component, edit method has: ${uid}`)
        const newDescriptor = {
            docUid : uid,
            title : newTitle,
            description : newDescription 
        }
        this.editPostEvent.emit(newDescriptor);
    }

    delete() {
        if (confirm("are you sure you want to delete this entry (cannot undo)?"))
        this.deletePostEvent.emit();
    }

    addPost(post : HTMLInputElement) {
        this.newPostEvent.emit(post.value);
        post.value = '';
        
    }

    ngOnInit(): void {
    }

}
