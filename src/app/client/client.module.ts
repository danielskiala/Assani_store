import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ClientRoutingModuleModule } from './client-routing-module.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    DetailComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModuleModule,
    NgxUsefulSwiperModule
  ]
})
export class ClientModule { }
