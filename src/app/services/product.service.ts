import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsUrl: string = 'http://localhost:8080/api/products?size=100';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<GetProductResponse>(this.productsUrl)
      .pipe(map((response) => response._embedded.products));
  }
}
interface GetProductResponse {
  _embedded: {
    products: Product[];
  };
}
