import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe(() => this.listProducts())
    );
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    let theKeyword = this.route.snapshot.paramMap.get('keyword')!;
    this.subscriptions.push(
      this.productService
        .getSearchProducts(theKeyword)
        .subscribe((data) => (this.products = data))
    );
  }
  handleListProducts() {
    // checking if there exists a query param id is present or not
    let hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    // updating current category id with new category id if it exists or else assignit default categoryid = 1
    this.currentCategoryId = hasCategoryId
      ? +this.route.snapshot.paramMap.get('id')!
      : 1;
    this.subscriptions.push(
      this.productService
        .getProductsList(this.currentCategoryId)
        .subscribe((data) => (this.products = data))
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe());
  }
}
