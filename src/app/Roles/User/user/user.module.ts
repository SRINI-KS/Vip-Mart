import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MyOrderComponent } from '../Components/my-order/my-order.component';
import { ProductViewComponent } from '../Components/product-view/product-view.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from '../Components/user-home/user-home.component';
import { UserNavbarComponent } from '../Components/user-navbar/user-navbar.component';
import { MaterialDesignModule } from 'src/app/Modules/Material/material-design/material-design.module';


@NgModule({
  declarations: [
    UserDashboardComponent,
    MyOrderComponent,
    ProductViewComponent,
    UserHomeComponent,
    UserNavbarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialDesignModule
  ]
})
export class UserModule { }
