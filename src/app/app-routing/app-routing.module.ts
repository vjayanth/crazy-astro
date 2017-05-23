import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

const appRoutes:Routes=[
  {
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'register',
    component:RegisterComponent
  },{
    path:'',redirectTo:'/dashboard',pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
