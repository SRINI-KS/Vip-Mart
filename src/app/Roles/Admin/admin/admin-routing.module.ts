import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../Components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from '../Components/home/home.component';
import { UsersComponent } from '../Components/users/users.component';
import { OrderListComponent } from '../Components/order-list/order-list.component';
import { AddProductComponent } from '../Components/add-product/add-product.component';
import { AddProductCardComponent } from '../Components/add-product-card/add-product-card.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent,children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'users',component:UsersComponent
      },
      {
        path:'orderlist',component:OrderListComponent
      },
      {
        path:'addproduct',component:AddProductComponent
      },
      {
        path:'addproductcard',component:AddProductCardComponent
      },
      {
        path:'',redirectTo:'/admin/home',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
