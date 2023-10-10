import { Injectable } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// models
// import { SBRouteData } from '../models';



@Injectable()
export class NavigationService {
    _sideNavVisible$ = new BehaviorSubject(true);
    _routeData$ = new BehaviorSubject({} as any);
    _currentURL$ = new BehaviorSubject('');

    constructor(public route: ActivatedRoute, public router: Router) {
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
                let snapshot = (event as ChildActivationEnd).snapshot;
                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this._routeData$.next(snapshot.data as any);
                this._currentURL$.next(router.url);
            });
    }

    sideNavVisible$(): Observable<boolean> {
        return this._sideNavVisible$;
    }

    toggleSideNav(visibility?: boolean) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        } else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }

    routeData$(): Observable<any> {
        return this._routeData$;
    }

    currentURL$(): Observable<string> {
        return this._currentURL$;
    }
}
