import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ContactComponent } from "../contact/contact.component";

export interface IDeactiveComponent {
  canExist(): boolean;
}

export class CanDeactiveGuardService implements CanDeactivate<IDeactiveComponent> {

  canDeactivate(component: IDeactiveComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {

    return component.canExist();

  }

}
