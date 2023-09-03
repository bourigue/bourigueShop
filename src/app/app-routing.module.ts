import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

import {AuthGuard} from "./demo/service/authentication/guard-auth.guard";
import {AngularFireAuthGuard,redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/access']);

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'admin', component: AppLayoutComponent,
            children:[
                {path:'product',
                    loadChildren: () => import('./demo/components/products/product.module').then(m=>m.ProductModule),
                    //    canActivate:[AuthGuard,redirectUnauthorizedToLogin]
                },
            ]
            },
            {path:'',loadChildren:()=>import("./demo/components/landing-page/landing-page.module").then(m=>m.LandingPageModule)},
            { path: '**', redirectTo: '/notfound' },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
