import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { AuthRouteGuard } from './Guards/auth-route.guard';
import { UserAuthGuardsGuard } from './Guards/UserAuth/user-auth-guards.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate:[AuthRouteGuard],
    loadChildren: () =>
      import('./Roles/Admin/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate:[UserAuthGuardsGuard],
    loadChildren: () =>
      import('./Roles/User/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
