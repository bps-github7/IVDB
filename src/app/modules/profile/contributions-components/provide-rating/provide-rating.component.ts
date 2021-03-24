import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RatingService } from '../../../common/services/rating.service';
import { Rating } from '../../../models/content/rating';


//default object for filling in prior to users providing a rating...
class Star implements Rating {
    username = null;
    game_title = null;
    value = 0;
}

@Component({
  selector: 'provide-rating',
  templateUrl: './provide-rating.component.html',
  styleUrls: ['./provide-rating.component.css']
})
export class ProvideRatingComponent implements OnInit {

  stars: Rating;
  game_stars : any;
  avgRating: Observable<any>;
  

  @Input() username : string;
  @Input() game_title :  string;

  constructor(private ratingService : RatingService, private router : Router) {
  }


  ngOnInit(): void {

      
      //to prevent rating documents being created if user is not logged in.
      if(!this.username) { return; }
      this.ratingService.getRatingAsPromise(this.username, this.game_title).then((rating : Rating) => {
          //adding return so that this method exits. ratings were getting stuck on zero
          if (rating) {
              this.stars = rating;
          } else {
              console.log("rating does not exist for this game...")
              //provides a proxy, so stars isnt undefined in the view, without having to make a db record for blank rating.
              this.stars = new Star();
          }
      }).catch((err) => {
          console.log("error when creating rating: " + err);
      })
  }

  fakeStarHandler() {
      /* Invoked when a non-signed-in user tries to submit a rating.
       */
      if (confirm("you must log in or create an account to rate games. \nDo you want to log in to account?")) {
          this.router.navigate(['../../sign_in']);
      }
      return;
  }

  starHandler(value) {
      this.ratingService.setRating(this.username, this.game_title, value)
      .then(() => console.log("rating succesfully created with value: " + value))
      .catch((err) => console.log("error when creating rating: " + err));
  }
}
