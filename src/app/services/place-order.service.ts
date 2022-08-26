import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/order-history.model';
import { StockEntry } from '../models/stock-entry.model';

export interface OrderEntry 
{
  ticker: string;
  priceToBuy: number;
  numberOfShares: number;
  orderDate: string;
  status_CODE: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http: HttpClient) { }

  postOrder(orderEntry : OrderEntry){
    //call http endpoint
    const options = {headers: { 'content-type': 'application/json'} }
    let orderUrl = "http://tampa3rest-tampa3rest.openshift17.conygre.com/order/add/"

    console.log(orderEntry)
    return this.http.post<any>(orderUrl, orderEntry, options);
  }

  getOrders()
  {
    //call http endpoint
    let orderUrl = "http://tampa3rest-tampa3rest.openshift17.conygre.com/stockRequest/all/all"

    return this.http.get<StockEntry[]>(orderUrl);
  }
}
