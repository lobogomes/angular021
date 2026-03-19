import {ChangeDetectionStrategy, Component, computed, DestroyRef, inject, linkedSignal, signal,} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AuthService} from '@core/auth/auth.service';
import {ThemeService} from '@core/theme/theme.service';
import {User} from '@core/auth/user.model';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {DividerModule} from 'primeng/divider';
import {Tooltip} from 'primeng/tooltip';
import {ClassNames} from 'primeng/classnames';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

const MOBILE_QUERY = '(max-width: 767px)';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AvatarModule,
    ButtonModule,
    SkeletonModule,
    DividerModule,
    Tooltip,
    ClassNames,
  ],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  /** No mobile, fecha automaticamente ao entrar; no desktop, mantém o último estado do usuário. */
  protected readonly sidebarOpen = linkedSignal(() => !this.isMobile());
  protected readonly sidebarCollapsed = signal(false);
  protected readonly navItems: NavItem[] = [
    {label: 'Início', icon: 'pi pi-home', route: '/dashboard'},
    {label: 'Tarefas', icon: 'pi pi-check-square', route: '/dashboard/tasks'},
    {label: 'Configurações', icon: 'pi pi-cog', route: '/dashboard/settings'},
  ];
  protected readonly themeService = inject(ThemeService);
  /** Classe do aside — overlay fixo no mobile, flex estático no desktop. */
  protected readonly asideClass = computed(() => {
    if (this.isMobile()) {
      return this.sidebarOpen()
        ? 'fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-surface-200 shadow-2xl'
        : 'hidden';
    }
    const w = this.sidebarCollapsed() ? 'w-16' : 'w-64';
    return `flex flex-col bg-surface-200 shadow-md transition-[width] duration-300 overflow-hidden ${w}`;
  });
  private readonly mq = window.matchMedia(MOBILE_QUERY);
  protected readonly isMobile = signal(this.mq.matches);
  private readonly authService = inject(AuthService);
  protected readonly user = linkedSignal<User | null, User | null>({
    source: this.authService.user,
    computation: (value, previous) => value ?? previous?.value ?? null,
  });

  constructor() {
    const handler = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);
    this.mq.addEventListener('change', handler);
    inject(DestroyRef).onDestroy(() => this.mq.removeEventListener('change', handler));
  }

  protected logout(): void {
    this.authService.logout();
  }

  protected userInitials(user: User): string {
    return user.name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
