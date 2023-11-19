import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {AuthenticationServiceService} from "../demo/service/authentication/authentication-service.service";
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    visible: boolean | false;
    items: MenuItem[] | undefined;

    constructor(public layoutService: LayoutService, private authSerices: AuthenticationServiceService) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'App',
                items: [
                    {   label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/admin']},
                    {
                        label: 'Prodcut Management',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/admin/product/productManagement']
                    },
                    {
                        label: 'Orders Management',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/admin/product/orderManagment']
                    },

                    {
                        label: 'Profile',
                        items: [
                            {
                                label: 'SignOut',
                                icon: 'pi pi-fw pi-sign-out',

                            },
                            {
                                label: 'Update Password',
                                icon: 'pi pi-fw pi-refresh',
                            },
                            {
                                label: 'Update profile',
                                icon:'pi pi-fw pi-user-edit'
                            }

                        ]
                    },
                ]
            },

            {
                label: 'Administration',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Administration',
                        items: [
                            {
                                label: 'Dashboard',
                                icon: 'pi pi-fw pi-home',
                                routerLink: ['/admin/administration/administartionUsers']


                            },
                            {
                                label: 'Users',
                                icon: 'pi pi-fw pi-user',
                            },


                        ]
                    }
                ]
            },




        ];
        this.items = [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            }
        ];
    }

    logOut(){
        this.authSerices.logout();

    }
    showDialog() {
        this.visible = true;
    }
}
