import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }
