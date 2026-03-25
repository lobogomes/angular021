import {inject, Injectable, Signal, signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map, switchMap} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
// layout breakpoints, sidebar state, route page title,
export class LayoutService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly _openedSidebar = signal(false);
  readonly openedSidebar = this._openedSidebar.asReadonly();

  private readonly _pageTitle = signal('');
  readonly pageTitle = this._pageTitle.asReadonly();

  readonly isMobile = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches)
    ),
    {initialValue: false}
  );

  // todo: remove this static navitems and use routes
  public readonly navItems: Signal<any[]> = signal([
    {label: 'Início', icon: 'pi pi-home', route: '/dashboard'},
    {label: 'Tarefas', icon: 'pi pi-check-square', route: '/tasks'},
    {label: 'Configurações', icon: 'pi pi-cog', route: '/settings'},
  ]);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.title),
      )
      .subscribe((title) => {
        if (title) {
          this._pageTitle.update(() => title);
        }
      });
  }

  toggleSidebar(value: boolean): void {
    this._openedSidebar.update(() => value);
  }


}
