import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Holding } from '../models/holding.model';

@Injectable({
  providedIn: 'root'
})
export class HoldingsService {

  constructor(private http: HttpClient) { }

  getHoldings(){
    //call http endpoint
    let holdingUrl = "http://tampa3rest-tampa3rest.openshift17.conygre.com/holdings/"

    return this.http.get<Holding[]>(holdingUrl);
  }
}
