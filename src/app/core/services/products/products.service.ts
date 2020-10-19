import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(
      `${environment.url_api}/products/${id}`,
      changes
    );
  }

  deleteProduct(id: string): void {
    this.http
      .delete(`${environment.url_api}/products/${id}`)
      .subscribe((res) => console.log(res));
  }
}
