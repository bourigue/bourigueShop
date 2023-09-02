import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {AngularFireModule} from "@angular/fire/compat";

import {MenuModule} from "primeng/menu";
 // Make sure this path is correct
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LandingPageComponent } from './demo/components/landing-page/landing-page.component';
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
export function playerFactory() {
    return player;
}
// @ts-ignore
@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,

    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyAdq5r8A8iNZMpVp-W26r5r7NzMcid75Vs",
            authDomain: "ecommerce-9ebdc.firebaseapp.com",
            projectId: "ecommerce-9ebdc",
            storageBucket: "ecommerce-9ebdc.appspot.com",
            messagingSenderId: "976276558673",
            appId: "1:976276558673:web:4ea9d0e76ddd049a853970",
            measurementId: "G-X6R047FQ4G"
        }),
        MenuModule,
        LottieModule.forRoot({player: playerFactory}),
        RippleModule,
        StyleClassModule,
        DividerModule,
        ButtonModule,

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
