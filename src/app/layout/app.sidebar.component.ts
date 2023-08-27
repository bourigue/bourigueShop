import {Component, ElementRef, OnInit} from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    items: MenuItem[] | undefined;

    constructor(public layoutService: LayoutService, public el: ElementRef) { }



    ngOnInit(): void {
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
}

