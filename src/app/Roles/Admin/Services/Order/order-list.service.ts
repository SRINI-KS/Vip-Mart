import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/Order/order';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  private Url = 'http://localhost:8080/order/getOrderList';

  constructor(public httpClient: HttpClient) {}

  getUsersOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.Url);
  }
}
