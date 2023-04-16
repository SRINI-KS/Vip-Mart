import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { MyOrderComponent } from '../Components/my-order/my-order.component';
import { StoreComponent } from '../Components/store/store.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { OrderComponent } from '../Components/order/order.component';

const routes: Routes = [
  {
    path:'',component:UserDashboardComponent,children:[
      {
        path:'myorder',component:MyOrderComponent
      },
      {
        path:'store',component:StoreComponent
      },
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'order/:id',component:OrderComponent
      },
      {
        path:'',redirectTo:'/user/store',pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
