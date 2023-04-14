import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from '../Components/add-product/add-product.component';
import { HomeComponent } from '../Components/home/home.component';
import { OrderListComponent } from '../Components/order-list/order-list.component';
import { UsersComponent } from '../Components/users/users.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from '../Components/admin-dashboard/admin-dashboard.component';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { MaterialDesignModule } from 'src/app/Modules/Material/material-design/material-design.module';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    OrderListComponent,
    AddProductComponent,
    AdminDashboardComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialDesignModule
  ]
})
export class AdminModule { }
