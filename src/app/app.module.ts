import {NgModule,    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {AngularFireModule} from "@angular/fire/compat";
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {MenuModule} from "primeng/menu";
import { BadgeModule } from 'primeng/badge';
import {LandingPageComponent} from './demo/components/landing-page/landing-page.component';
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ChipsModule} from "primeng/chips";
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { DashbordComponent } from './demo/components/dashbord/dashbord.component';
import {ChartModule} from "primeng/chart";
import {CountUpModule} from "ngx-countup";
import { DashbordUsersComponent } from './demo/components/administartion/dashbord-users/dashbord-users.component';
// @ts-ignore
@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        DashbordComponent,
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
        // LottieModule.forRoot({player: playerFactory}),
        RippleModule,
        StyleClassModule,
        DividerModule,
        ButtonModule,
        DataViewModule,
        DropdownModule,
        FormsModule,
        RatingModule,
        ChipsModule,
        CalendarModule, // Add this line to import the CalendarModule
        CardModule,
        TagModule,
        BadgeModule,
        ImageModule,
        ChartModule,
        CountUpModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },

    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

}
