import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/Order/order';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private Url = "http://localhost:8080/product/add"
  

  constructor(public httpClient:HttpClient) { }

  addProduct(productData:ProductModel ):Observable<object>
  {
    return this.httpClient.post((this.Url),productData);
  }


}
