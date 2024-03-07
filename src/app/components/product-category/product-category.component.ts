import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  productCategory: ProductCategory[] = [];
  ngOnInit(): void {
    this.listProductCategory();
  }
  constructor(private productService: ProductService) {}
  listProductCategory() {
    this.subscriptions.push(
      this.productService.getProductCategory().subscribe((data) => {
        this.productCategory = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe());
  }
}
