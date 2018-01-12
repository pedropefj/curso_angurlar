import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RestaurantsService} from '../../restaurants/restaurants.service'

import {Observable} from 'rxjs/Observable'

import{Review} from '../reviews/review.module'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(reviews => this.reviews = reviews)
  }

}
