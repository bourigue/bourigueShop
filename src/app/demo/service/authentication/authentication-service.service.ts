import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs/operators";
import firebase from "firebase/compat";
import User = firebase.User;
import {Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private auth:AngularFireAuth,private router:Router) {
  }

  login(email:string,password:string){
      try {
          this.auth.signInWithEmailAndPassword(email, password)   .then(() => {
              this.auth.user.subscribe(user => {
                  if (user) {
                      // User is authenticated, navigate to '/test'
                      this.router.navigate(['/product']);
                  } else {
                      // User is not authenticated
                  }
              });
          })
              .catch(error => {
                  console.error(error);
              });
           console.log(this.auth.user)


      }catch (error){
       console.error(error);
      }
  }
  logout(){
        try {
            this.auth.signOut();
            this.router.navigate(["/auth/login"]);
        }catch (error){
            console.error(error);
        }
    }
  getUserEmail():any {
        this.auth.user.subscribe((user: User | null) => {
            if (user) {
                const email = user.email;
                console.log('User Email:', email);
                return true;
            } else {

               return false;
            }
        });
    }
  isOnline(): boolean {
        return navigator.onLine;
    }
}
