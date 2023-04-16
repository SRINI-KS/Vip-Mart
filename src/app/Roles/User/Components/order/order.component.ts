import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/Order/order';
import { AuthFunctionService } from 'src/app/Services/Auth/AuthFunction/auth-function.service';
import { StoreCardComponent } from '../store-card/store-card.component';
import { ProductService } from '../../Services/Product/product.service';
import { ProductModel } from 'src/app/Models/ProductModel/product-model';
import { parse } from '@fortawesome/fontawesome-svg-core';
import { OrderService } from '../../Services/Product/Order/order.service';
import { AlertifyService } from 'src/app/Services/Alert/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  productData!:ProductModel;

  constructor(
    private _formBuilder: FormBuilder,
    private authFunction: AuthFunctionService,
    private route:ActivatedRoute,
    private productService:ProductService,
    private orderService:OrderService,
    private alert:AlertifyService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.orderData.orderUserId=this.getOrderUserId();
    this.orderData.orderProductId=this.getOrderProductId();

    
  }
  orderData: Order = {
    orderUserId:0,
    orderUserName: '',
    orderUserAddress: '',
    orderUserContactNumber: null,
    orderUserAlternateNumber: null,
    orderAmount: 0,
    orderProductId: 0,
  };

  firstFormGroup = this._formBuilder.group({
    one: ['', Validators.required],
    two: ['', Validators.required],
    three: ['', Validators.required],
    four: ['', Validators.required],
  });

  getOrderData() {
    this.getOrderProductData()
    this.orderService.placeOrder(this.orderData).subscribe(
      (Response)=>{
        if(Response){
          this.alert.success("Order Placed")
          this.router.navigate(['user/store'])
        }
        },
      (Error:HttpErrorResponse)=>{
    this.alert.error(Error.error.message)
      }
    )

    console.log(this.orderData)
  }
  getOrderUserId() {
    let data: any = this.authFunction.getToken();
    let userId = JSON.parse(data).id;
    return userId;
  }
  getOrderProductId():number{
    let productId = +this.route.snapshot.params['id'];
    return productId;
    
  }
  getOrderProductData(){
    this.productService.getProductDataById(this.orderData.orderProductId).subscribe(
      (Response)=>{
        this.productData=Response
        this.orderData.orderAmount=this.productData.productPrice

      }

  )}
}
