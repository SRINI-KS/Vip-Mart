import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/Product/product.service';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  allProduct: any = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getProduct().subscribe(
      (Response) => {
        this.allProduct = Response;
        console.log(Response);
      },
      (Error) => {}
    );
  }
}
