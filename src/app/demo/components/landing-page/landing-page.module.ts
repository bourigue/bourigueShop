import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
  ]
})
export class LandingPageModule { }
