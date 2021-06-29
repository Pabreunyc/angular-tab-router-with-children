import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteService } from '../note/note.service';

@Injectable({
  providedIn: 'root'
})
export class NoteGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor( noteService: NoteService ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log('this.canActivate', next,state.url);
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

// ----------------------------------------------------------------------------

export class NoteGuardEdit implements CanActivate, CanLoad, CanDeactivate<any> {

  constructor( noteService: NoteService ) {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log('NoteGuardList.canActivate', next,state.url);
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
     Observable<boolean> | Promise<boolean> | boolean {

      return true;
  }

}