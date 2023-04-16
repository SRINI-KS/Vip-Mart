import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService } from 'src/app/Services/Alert/alertify.service';
import { OrderListService } from '../../Services/Order/order-list.service';
import { Order } from 'src/app/Models/Order/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  userOrderList:Order[]=[];
  constructor(
    private orderService: OrderListService,
    private alert: AlertifyService
  ) {}

  ngOnInit(): void {
    this.orderService.getUsersOrder().subscribe(
      (Response: any) => {
        this.userOrderList = Response;
        console.log(Response)
      },
      (Error: HttpErrorResponse) => {
        this.alert.error(Error.error.message);
      }
    );
  }
}
