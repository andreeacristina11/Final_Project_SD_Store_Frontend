import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  numberOfProducstInCart = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getProductsFromCart().subscribe((data) => {
      this.numberOfProducstInCart = data.productsInCart.length;
    });
  }

}
