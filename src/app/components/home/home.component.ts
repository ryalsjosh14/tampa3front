import { Component, OnInit } from '@angular/core';
import { Holding } from 'src/app/models/holding.model';
import { HoldingsService } from 'src/app/services/holdings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private holdingsSvc: HoldingsService) { }

  holdings:Holding[] = [];

  ngOnInit(): void {
    this.getHoldings();
  }

  //call service to get data
  getHoldings(){

    this.holdingsSvc.getHoldings().subscribe((data: Holding[]) => this.holdings = data);
  }


}
