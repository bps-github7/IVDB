import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../common/services/suggestion.service';

@Component({
  selector: 'app-suggest-new',
  templateUrl: './suggest-new.component.html',
  styleUrls: ['./suggest-new.component.css']
})
export class SuggestNewComponent implements OnInit {

  constructor(private suggestionService : SuggestionService) { }

  ngOnInit(): void {
  }

  submitRequest(request) {
      this.suggestionService.submit(request)
  }

}
