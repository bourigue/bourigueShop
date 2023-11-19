import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordUsersComponent} from "./dashbord-users/dashbord-users.component";

const routes: Routes = [{path:'administartionUsers',
    component:DashbordUsersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministartionRoutingModule { }
