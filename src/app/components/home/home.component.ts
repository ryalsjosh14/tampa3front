import { Component, OnInit } from '@angular/core';
import { Holding } from 'src/app/models/holding.model';
import { MyStock } from 'src/app/models/MyStock.model';
import { HoldingsService } from 'src/app/services/holdings.service';
import { YahooService } from 'src/app/services/yahoo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private holdingsSvc: HoldingsService, private yahooSvc:YahooService) { }

  holdings:Holding[] = [];
  balance:number = 0;

  ngOnInit(): void {
    this.getHoldings();
  }

  //call service to get data
  getHoldings(){

    this.holdingsSvc.getHoldings().subscribe((data: Holding[]) => {
      this.holdings = data

      this.holdings.map( hold => {
          this.yahooSvc.getPrice(hold.ticker).subscribe( (stock:MyStock)=>{
          hold.price = stock.price;
          hold.totalValue = (hold.price && hold.numShares) ? hold.price * hold.numShares : 0;
          this.balance += hold.totalValue;
        });

      })
    
    });
  }


}
