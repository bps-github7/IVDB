import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'suggest-new',
  templateUrl: './suggest-new.component.html',
  styleUrls: ['./suggest-new.component.css']
})
export class SuggestNewComponent implements OnInit {

    // or should it be game, game-info, with a nested drop down for game info?
    options = ['game', 'category', 'creator', 'console'];
    
    // v2 - removed console_maker because its sort of abstract/ hard to understand
    opts = ['game', 'game-info']
    gameInfoOpts = ['category', 'creator', 'console'];
    
    selectedOption: any;
    gameInfoType: any;

    constructor(private suggestionService : SuggestionService) { }

    ngOnInit(): void {
    }

    submitSuggestion(request) {
        alert("Thanks for your suggestion- we will review it and get back to you quickly")
        this.suggestionService.submit(request.value);
        this.reset(request)
    }

    changeDetector() {
        /* event handler- when user clicks on the primary type, set selectedOption to null
        prevents unwanted form areas from appearing if user toggles between choices.
         */
        console.log(this.selectedOption);

        //weird, seems that these are flipped, selectedOption == game when gameinfo is clicked and vice versa
        if (this.selectedOption == 'game-info') {
            this.gameInfoType = null;
        }
    }

    // cant access our form by name on component logic
    reset(form) {
        form.reset()
        this.selectedOption = null;
        this.gameInfoType = null;
    }

}
