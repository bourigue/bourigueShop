import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'productManagement',
    loadChildren: () => import('./products-management/products-management.module').then(m => m.ProductsManagementModule)
  },
  {
  path: 'orderManagment',
  loadChildren: () => import('./orders-management/orders-management.module').then(m => m.OrdersManagementModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
