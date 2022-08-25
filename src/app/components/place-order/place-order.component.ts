import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface StockEntry 
{
  symbol: string;
  name: string;
  value: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  tickerFormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['symbol', 'name', 'value'];
  dataSource: MatTableDataSource<StockEntry>;
  numShares: number;
  purchaseSymbol: string;
  purchaseSharePrice: number;
  buyTotal: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() 
  {
    // Initialize dummy stock data
    const stocks = Array.from({length: 100}, (_, k) => createNewUser());
    this.dataSource = new MatTableDataSource(stocks);

    this.numShares = 0;
    this.purchaseSymbol = "N/A";
    this.purchaseSharePrice = 0.0;
    this.buyTotal = 0;
  }

  getRecord(row: StockEntry)
  {
    console.log(row);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setCurrentPurchaseElements(row : StockEntry) 
  {
    this.purchaseSymbol = row.symbol;
    this.purchaseSharePrice = parseFloat(row.value);
  }

  updateOrderInfo(event : Event)
  {
    this.numShares = parseInt((event.target as HTMLInputElement).value);
    if (this.purchaseSymbol != "N/A" )
    {
      this.buyTotal = this.purchaseSharePrice * this.numShares;
    }
  }

}

/**Required for dummy data entry */

const NAMES: string[] = [
  'American Express Company',
  'Charles Schwab Corp.',
  'Centex Corp.',
  'ExxonMobil Corporation',
  'Genuine Parts Compan',
  'Foot Locker Inc',
];


function makeid(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

/** Builds and returns a new User. */
function createNewUser(): StockEntry {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    symbol: makeid(4),
    name: name,
    value: (Math.round(Math.random() * 10000)/100).toString(),
  };
}