import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
@Injectable({
    providedIn: 'root', // Make sure to provide the guard at the root level
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.auth.user.pipe(
            map(user => {
                if (user) {
                    return true; // User is authenticated, allow access
                } else {
                    return this.router.createUrlTree(['/auth/login']); // User is not authenticated, redirect to login page
                }
            })
        );
    }
}


