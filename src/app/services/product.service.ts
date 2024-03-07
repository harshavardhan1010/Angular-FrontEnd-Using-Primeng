import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable, map } from 'rxjs';
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:8080/api/products';
  constructor(private httpClient: HttpClient) {}
  getProductsList(theCategoryId: number): Observable<Product[]> {
    let searchUrl: string = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }
  getProductCategory(): Observable<ProductCategory[]> {
    let url: string = 'http://localhost:8080/api/product-category';
    return this.httpClient
      .get<GetResponseProductCategory>(url)
      .pipe(map((response) => response._embedded.productCategory));
  }
  getSearchProducts(theKeyword: string): Observable<Product[]> {
    let searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }

  getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProduct(theProductId: number): Observable<Product> {
    let productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }
}
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
