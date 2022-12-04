import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

const routes:Routes =[
  {path:'home', component:HomeComponent},
  {path:'detail', component:DetailComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ClientRoutingModuleModule { }
