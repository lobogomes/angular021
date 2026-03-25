import {inject, Injectable, Signal, signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly _openedSidebar = signal(false);

  readonly openedSidebar = this._openedSidebar.asReadonly();

  readonly isMobile = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches)
    ),
    {initialValue: false}
  );

  toggleSidebar(value: boolean): void {
    this._openedSidebar.update(() => value);
  }

  public readonly navItems: Signal<any[]> = signal([
    {label: 'Início', icon: 'pi pi-home', route: '/dashboard'},
    {label: 'Tarefas', icon: 'pi pi-check-square', route: '/tasks'},
    {label: 'Configurações', icon: 'pi pi-cog', route: '/settings'},
  ]);
}
