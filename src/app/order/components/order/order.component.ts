import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { reduce, switchMap, tap, map } from 'rxjs/operators';

interface Order {
  product: Product;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private cartService: CartService) {
    this.orders$ = this.cartService.cart$.pipe(
      map((products) => {
        return products.reduce((orders: Order[], product) => {
          const index = orders.findIndex((or) => or.product.id === product.id);
          if (index < 0) {
            orders.push({ product, quantity: 1, total: product.price });
          } else {
            orders[index].quantity++;
            orders[index].total = product.price * orders[index].quantity;
          }
          return orders;
        }, []);
      }),
      tap((orders) => console.log('orders', orders))
    );
    // this.orders$ = this.cartService.cart$.pipe(
    //   switchMap((products) => products as Product[]),
    //   reduce<Product, Order[]>((orders, product) => {
    //     const index = orders.findIndex((or) => or.product.id === product.id);
    //     if (index < 0) {
    //       orders.push({ product, quantity: 1, total: product.price });
    //     } else {
    //       orders[index].quantity++;
    //       orders[index].total = product.price * orders[index].quantity;
    //     }
    //     return orders;
    //   }, [])
    // );
  }

  ngOnInit(): void {}
}
