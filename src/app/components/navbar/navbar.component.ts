import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // goToHome(){
  //   this.router.navigate(['/', 'home']);
  // }

  // goToOrderForm(){
  //   this.router.navigate(['/', 'order']);
  // }

  // goToOrderHistory(){
  //   this.router.navigate(['/', 'history']);
  // }

}
