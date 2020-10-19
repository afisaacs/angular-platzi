import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'description',
    'acciones',
  ];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
