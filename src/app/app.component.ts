import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,private auth: AngularFireAuth) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
