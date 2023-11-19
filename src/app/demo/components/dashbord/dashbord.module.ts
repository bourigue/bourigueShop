import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { DashbordRoutingModule } from './dashbord-routing.module';
import {CountUpModule} from "ngx-countup";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ChartModule,
    CountUpModule
  ]
})
export class DashbordModule { }
