import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {ProductShoppignCartResponseDto, ShoppingCartResponseDto} from './model/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpClient: HttpClient) { }

  addProductToCart(productId: number): Observable<any>{
    return this.httpClient.put(AppConfig.API_PATH + '/shopping-cart', productId);
  }

  getProductsFromCart(): Observable<ShoppingCartResponseDto>{
    return this.httpClient.get<ShoppingCartResponseDto>(AppConfig.API_PATH + ' /shopping-cart');
  }
}
