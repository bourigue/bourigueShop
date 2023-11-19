import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdcutsManagementComponent} from "./prodcuts-management.component";

const routes: Routes = [
    {
        path:'',
        component:ProdcutsManagementComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsManagementRoutingModule { }
