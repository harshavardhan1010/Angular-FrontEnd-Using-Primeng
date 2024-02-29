import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    this.listProducts();
  }
  constructor(private productService: ProductService) {}
  listProducts() {
    this.subscriptions.push(
      this.productService
        .getProducts()
        .subscribe((data) => (this.products = data))
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe());
  }
}
