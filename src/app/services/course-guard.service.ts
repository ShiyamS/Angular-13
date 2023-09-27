
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild {
  constructor(private userAuth: AuthService, private router: Router) { }


  canActivate(): boolean {
    if (this.userAuth.isAuthenticated()) {
      return true;
    } else {

      this.router.navigate(['']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate();
  }
}
