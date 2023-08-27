import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {AuthenticationServiceService} from "../../../service/authentication/authentication-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    email!:string;
    password!: string;


    constructor(public layoutService: LayoutService,private auth:AuthenticationServiceService,private router:Router ) { }
    login(){
       this.auth.login(this.email,this.password);
        this.auth.getUserEmail();

       console.log(this.email+this.password);
    }


}
