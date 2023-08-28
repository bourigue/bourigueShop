import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProductsManagementRoutingModule } from './products-management-routing.module';
import {ProdcutsManagementComponent} from "./prodcuts-management.component";
import {MessageService} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {ChipsModule} from "primeng/chips";
import {ImageModule} from "primeng/image";
import {DialogModule} from "primeng/dialog";
import {SkeletonModule} from "primeng/skeleton";
import {FormsModule} from "@angular/forms";
import {SplitterModule} from "primeng/splitter";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
      ProdcutsManagementComponent
  ],
    imports: [
        CommonModule,
        ProductsManagementRoutingModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ChipsModule,
        ImageModule,
        NgOptimizedImage,
        DialogModule,
        SkeletonModule,
        FormsModule,
        SplitterModule,
        PanelModule,
        DropdownModule,
        PaginatorModule,
        FileUploadModule,
        ToastModule,

    ]
    ,
    providers:[MessageService]
})
export class ProductsManagementModule { }
