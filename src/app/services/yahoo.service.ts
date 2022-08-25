import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyStock } from '../models/MyStock.model';
//var yahooFinance = require('yahoo-finance');

@Injectable({
  providedIn: 'root'
})
export class YahooService {

  constructor(private http: HttpClient) { }

  getPrice(ticker:String|any){

    // return yahooFinance.quote({
    //   symbol: ticker
    // }, function(err: any, quote: any) {
    //   console.log(quote);
    //   console.log(err)
    // });

    let url = "http://tampa3rest-tampa3rest.openshift17.conygre.com/stockRequest/"
    url += ticker


    return this.http.get<MyStock>(url);


  }
}
