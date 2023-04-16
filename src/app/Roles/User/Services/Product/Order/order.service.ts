import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/Order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = "http://localhost:8080/order/placeOrder"

  constructor(public httpClient:HttpClient) { }

  placeOrder(orderData:Order ):Observable<object>
  {
    return this.httpClient.post((this.orderUrl),orderData);
  }
}
