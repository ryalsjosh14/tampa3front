import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/order-history.model';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http: HttpClient) { }

  getOrders(){
    //call http endpoint
    let orderUrl = "http://tampa3rest-tampa3rest.openshift17.conygre.com/order/"

    return this.http.get<Orders[]>(orderUrl);
  }
}
