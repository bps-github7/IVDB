import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../common/services/suggestion.service';

@Component({
  selector: 'suggest-new',
  templateUrl: './suggest-new.component.html',
  styleUrls: ['./suggest-new.component.css']
})
export class SuggestNewComponent implements OnInit {

    // or should it be game, game-info, with a nested drop down for game info?
    options = ['game', 'category', 'creator', 'console-maker', 'console'];
    selectedOption: any;

    constructor(private suggestionService : SuggestionService) { }

    ngOnInit(): void {
    }

    submitRequest(request) {
        this.suggestionService.submit(request)
    }

}
