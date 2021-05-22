import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductFilters, ProductResponseDto} from '../model/product-model';
import {PageEvent} from '@angular/material/paginator';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-product-card-view',
  templateUrl: './product-card-view.component.html',
  styleUrls: ['./product-card-view.component.css']
})
export class ProductCardViewComponent implements OnInit {

  products: ProductResponseDto [] = [];
  totalNumberOfElements = 0;

  constructor(private productService: ProductService, private  shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
   this.getProducts(0, 5, {});
  }

  changePage(event: PageEvent): void{
    this.getProducts(event.pageIndex, event.pageSize, {});
  }


  getProducts(page: number, pageSize: number, filters: ProductFilters): void{
    this.productService.getProducts(page, pageSize, filters). subscribe((data) => {
      this.products = data.content;
      this.totalNumberOfElements = data.totalElements;
    });
  }

  addProductToCart(productId: number): void{
    this.shoppingCartService.addProductToCart(productId).subscribe((data) => {
      console.log(data);
    });
  }
}
