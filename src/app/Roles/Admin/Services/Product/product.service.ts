import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private addProductUrl = "http://localhost:8080/product/add"

  constructor(public httpClient:HttpClient) { }

  addProduct(productData:ProductModel ):Observable<object>
  {
    return this.httpClient.post((this.addProductUrl),productData);
  }

}
