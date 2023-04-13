import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './Modules/Material/material-design/material-design.module';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardComponent } from './Roles/Admin/Components/admin-dashboard/admin-dashboard.component';
import { NavBarComponent } from './Roles/Admin/Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Roles/Admin/Components/footer/footer.component';
import { HomeComponent } from './Roles/Admin/Components/home/home.component';
import { UsersComponent } from './Roles/Admin/Components/users/users.component';
import { OrderListComponent } from './Roles/Admin/Components/order-list/order-list.component';
import { AddProductComponent } from './Roles/Admin/Components/add-product/add-product.component';
import { AddProductCardComponent } from './Roles/Admin/Components/add-product-card/add-product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './Roles/User/Components/user-dashboard/user-dashboard.component';
import { MyOrderComponent } from './Roles/User/Components/my-order/my-order.component';
import { ProductViewComponent } from './Roles/User/Components/product-view/product-view.component';
import { UserHomeComponent } from './Roles/User/Components/user-home/user-home.component';
import { UserNavBarComponent } from './Roles/User/Components/user-nav-bar/user-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    OrderListComponent,
    AddProductComponent,
    AddProductCardComponent,
    UserDashboardComponent,
    MyOrderComponent,
    ProductViewComponent,
    UserHomeComponent,
    UserNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
