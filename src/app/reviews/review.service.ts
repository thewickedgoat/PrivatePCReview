import { Injectable } from '@angular/core';
import {Review} from "./review";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class ReviewService {

  reviews: Review[];

  constructor(private router: Router, private af : AngularFire) {
    /*this.reviews = [{id: '0', name : "Amd-MasterRace", description : "Much race such master", rate : 4.9},
      {id: '1', name : "Amd-Budget", description : "Such budget much Amd", rate : 3.9}];*/
  }

  getReviews(){
    return this.af.database.list('/reviews');
  }

  getReview(id: string) : Observable<Review>{
    return this.af.database.object('reviews/' + id);
  }

  addReview(review: Review){
    this.af.database.list('/reviews').push(review).key;
  }

  deleteReview(review: Review){
    this.af.database.list('/reviews').remove(review.$key);
  }

  updateReview(review: Review){
    this.af.database.list('/reviews').update(review.$key, review);
  }
}
