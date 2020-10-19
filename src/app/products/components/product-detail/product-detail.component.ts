import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '500',
      description: 'Mejor mouse para desarrolladores',
      image: 'assets/images/banner-1.jpg',
      price: 150000,
      title: 'Logitech Mx Master 3',
    };
    this.productsService
      .createProduct(newProduct)
      .subscribe((product) => console.log('Producto creado:', product));
  }

  updateProduct(): void {
    const id = '500';
    const updateProduct: Partial<Product> = {
      description: 'Developer @aarondev',
      price: 550000,
    };
    this.productsService
      .updateProduct(id, updateProduct)
      .subscribe((product) =>
        console.log('PRoducto actualizado:', updateProduct)
      );
  }

  deleteProduct(): void {
    const id = '500';
    this.productsService.deleteProduct(id);
  }
}
