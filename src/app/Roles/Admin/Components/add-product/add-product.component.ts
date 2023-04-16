import { Component } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';
import { ProductService } from '../../Services/Product/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productData: ProductModel = {
    productName: '',
    productPrice: 0,
    productDiscription: '',
    productImage: '',
    category: '',
    subCategory: '',
  };

  constructor(private productService: ProductService) {}

  // add new product to the database
  addNewProduct() {
    this.productService.addProduct(this.productData).subscribe(
      (Response) => {
        console.log(Response);
      },
      (Error: HttpErrorResponse) => {
        console.log(Error.error.message);
      }
    );
  }
}
