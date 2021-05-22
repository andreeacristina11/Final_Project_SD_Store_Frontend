import { Injectable } from '@angular/core';
import {AppConfig} from './config/app-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginatedProductResponse, ProductFilters} from './model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_API = AppConfig.API_PATH + '/products';

  constructor(private httpClient: HttpClient) {}

    getProducts(page: number, pageSize: number, productFilter: ProductFilters): Observable<PaginatedProductResponse> {
      let PRODUCT_API_WITH_PAGE = this.PRODUCT_API  + '?' + 'page=' + page + '&pageSize=' + pageSize;
      if (productFilter.name){
        PRODUCT_API_WITH_PAGE = PRODUCT_API_WITH_PAGE + '&name=' + productFilter.name;
      }
      if (productFilter.lowPrice && !productFilter.highPrice){ // price 200: fara upper limit
        PRODUCT_API_WITH_PAGE = PRODUCT_API_WITH_PAGE  + '&price=' + productFilter.lowPrice + ':' ;
      }
      if (productFilter.lowPrice && productFilter.highPrice){ // price 100:200
        PRODUCT_API_WITH_PAGE = PRODUCT_API_WITH_PAGE  + '&price=' + productFilter.lowPrice + ':' + productFilter.highPrice;
      }
      if (productFilter.categoryId){
        PRODUCT_API_WITH_PAGE = PRODUCT_API_WITH_PAGE  + '&categoryId=' + productFilter.categoryId;
      }
      if (productFilter.productType){
        PRODUCT_API_WITH_PAGE = PRODUCT_API_WITH_PAGE  + '&productType=' + productFilter.productType;
      }
      return this.httpClient.get<PaginatedProductResponse>(PRODUCT_API_WITH_PAGE);
    }
  }

