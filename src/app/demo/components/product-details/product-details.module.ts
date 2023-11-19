import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {FormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product-details.component';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { NgxImageZoomModule } from 'ngx-image-zoom';
 


@NgModule({
    declarations: [
        ProductDetailsComponent,
    ],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule,
        FormsModule,
        // LottieComponent,
        CardModule,
        TagModule,
        BadgeModule,
        ImageModule,
        ButtonModule,
        InputTextModule,
        ToastModule,
        NgxImageZoomModule 


    ]
})
export class ProductDetailsModule { }
