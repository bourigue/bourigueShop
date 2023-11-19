import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IdParameterGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = +route.paramMap.get('id');

    if (id !== 1) {
      this.router.navigate(['/']); // Redirect to the home page
      return false; // Prevent access to the route
    }

    return true; // Allow access to the route
  }
}
