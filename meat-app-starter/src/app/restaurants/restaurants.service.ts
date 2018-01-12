import{Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Restaurant} from "./restaurant/restaurant.module"
import {Review} from '../restaurant-detail/reviews/review.module'
import {MenuItem} from '../restaurant-detail/menu/menu-item/menu-item.module'
import{MEAT_API} from '../app.api'
import{ErrorHandler} from '../app.error-handler'

import{Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class RestaurantsService {
  constructor(private http: Http){
  }


restaurants(): Observable<Restaurant[]>{
return this.http.get(`${MEAT_API}/restaurants`)
.map(response => response.json())
.catch(ErrorHandler.handleError)

  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response=>response.json())
    .catch(ErrorHandler.handleError)
  }
  reviewsOfRestaurant(id: string): Observable<Review[]>{
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }
  menuOfRestaurant(id: string): Observable<MenuItem[]>{
  return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }
}
