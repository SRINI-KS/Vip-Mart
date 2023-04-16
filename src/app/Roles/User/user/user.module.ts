import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MyOrderComponent } from '../Components/my-order/my-order.component';
import { StoreComponent } from '../Components/store/store.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from '../Components/user-navbar/user-navbar.component';
import { MaterialDesignModule } from 'src/app/Modules/Material/material-design/material-design.module';
import { StoreCardComponent } from '../Components/store-card/store-card.component';
import { OrderComponent } from '../Components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDashboardComponent,
    MyOrderComponent,
    StoreComponent,
    UserNavbarComponent,
    ProfileComponent,
    StoreCardComponent,
    OrderComponent, 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
