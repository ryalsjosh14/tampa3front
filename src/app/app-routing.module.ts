import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const routes: Routes = [
  { path: 'placeOrder', component: PlaceOrderComponent },
// { path: 'aboutUs', component: AboutUsComponent },
// { path: 'index', component: IndexComponent},
// { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
