import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from 'src/app/services/order-history.service';
import { Orders } from 'src/app/models/order-history.model';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private orderService: OrderHistoryService) { }

  orders:Orders[] = [];

  ngOnInit(): void {
    this.getOrders();
  }

  //call service to get data
  getOrders(){

    this.orderService.getOrders().subscribe((data: Orders[]) => this.orders = data);

  }

  getDate(ord:Orders){
    return ord.orderDate?.slice(0,10);
  }
}
