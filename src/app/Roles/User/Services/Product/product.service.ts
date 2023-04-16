import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private ProductUrl = 'http://localhost:8080/product/getProduct';

  constructor(public httpClient: HttpClient) {}
  // get all product data from backend
  getProduct(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.ProductUrl);
  }

  // get product details using product id
  getProductDataById(id: number) {
    return this.getProduct().pipe(
      map((product: any[]) => {
        return product.find((p) => p.productId === id);
      })
    );
  }
}
