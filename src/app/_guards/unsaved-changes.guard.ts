import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanActivate, CanDeactivate<CanComponentDeactivate> {
  constructor() { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  canDeactivate( component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
     Observable<boolean> | Promise<boolean> | boolean {
    console.log('UnsavedChangesGuard.canDeactivate');
    return component.canDeactivate() ;                   
  }
}
