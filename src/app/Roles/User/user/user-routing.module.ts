import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { MyOrderComponent } from '../Components/my-order/my-order.component';
import { ProductViewComponent } from '../Components/product-view/product-view.component';
import { UserHomeComponent } from '../Components/user-home/user-home.component';

const routes: Routes = [
  {
    path:'',component:UserDashboardComponent,children:[
      {
        path:'userhome',component:UserHomeComponent
      },
      {
        path:'myorder',component:MyOrderComponent
      },
      {
        path:'productview',component:ProductViewComponent
      },
      {
        path:'',redirectTo:'/user/userhome',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
