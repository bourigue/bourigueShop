import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministartionRoutingModule } from './administartion-routing.module';
import {DashbordUsersComponent} from "./dashbord-users/dashbord-users.component";
import {CountUpModule} from "ngx-countup";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [DashbordUsersComponent],
    imports: [
        CommonModule,
        AdministartionRoutingModule,
        CountUpModule,
        CardModule

    ]
})
export class AdministartionModule { }
