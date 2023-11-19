import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

import {AngularFireAuthGuard,redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";
import { SidenavComponent } from './layout/sidebar/sidenav/sidenav.component';



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/access']);

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'admin', component: AppLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./demo/components/dashbord/dashbord.module').then(m => m.DashbordModule),
                        //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                    },
                    {
                        path: 'product',
                        loadChildren: () => import('./demo/components/products/product.module').then(m => m.ProductModule),
                        //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                    },
                    {
                        path: 'product',
                        loadChildren: () => import('./demo/components/products/product.module').then(m => m.ProductModule),
                        //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                    },
                    {
                        path: 'administration',
                        loadChildren: () => import('./demo/components/administartion/administartion.module').then(m => m.AdministartionModule),
                        //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                    },
                ]
            },
            {
                path: '',
                loadChildren: () => import("./demo/components/landing-page/landing-page.module").then(m => m.LandingPageModule)
            },
            {
                path: 'productDetails/:id',
                loadChildren: () => import("./demo/components/product-details/product-details.module").then(m => m.ProductDetailsModule)/*,canActivate: [IdParameterGuard],*/
            },
            {path: 'nav',component:SidenavComponent,
            children: [
                {
                    path: 'product',
                    loadChildren: () => import('./demo/components/products/product.module').then(m => m.ProductModule),
                    //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                },
                {
                    path: 'product',
                    loadChildren: () => import('./demo/components/products/product.module').then(m => m.ProductModule),
                    //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                },
            ]},
            {path: '**', redirectTo: '/notfound'},
            {path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)},
        ],)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
