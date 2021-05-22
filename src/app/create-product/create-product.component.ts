import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
