import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManagementRoutingModule } from './orders-management-routing.module';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { OrdersManagementComponent } from './orders-management.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ChipsModule } from 'primeng/chips';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  declarations: [
    OrdersManagementComponent
  ],
  imports: [
    CommonModule,
    OrdersManagementRoutingModule,
    ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ChipsModule,
        ImageModule,
        //NgOptimizedImage,
        DialogModule,
        SkeletonModule,
        FormsModule,
        SplitterModule,
        PanelModule,
        DropdownModule,
        PaginatorModule,
        FileUploadModule,
        ToastModule,
        ProgressSpinnerModule,
        TagModule,
        MessagesModule,
        BadgeModule
  ],
  providers:[MessageService]

})
export class OrdersManagementModule { }
