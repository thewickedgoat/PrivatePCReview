import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Review} from "../review";
import {ReviewService} from "../review.service";

@Component({
  selector: 'mrr-review-view',
  templateUrl: './review-view.component.html',
})
export class ReviewViewComponent implements OnInit {

  reviews: Observable<Review[]>

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }

}
