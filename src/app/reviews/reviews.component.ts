import { Component, OnInit } from '@angular/core';
import {Review} from "./review";
//Contoller
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews : Review[]
  newReview : Review;

  constructor() {
    this.reviews = [
      {name : "Amd-MasterRace", description : "Much race such master", rate : 4.9},
      {name : "Amd-Budget", description : "Such budget much Amd", rate : 3.9}
    ]

    this.newReview = new Review();
  }

  ngOnInit() {
  }

  SubmitReview()
  {
    this.reviews.push(this.newReview);
    this.newReview = new Review();
  }

}
