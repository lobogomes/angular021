import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { ThemeService } from '@core/theme/theme.service';
import { User } from '@core/auth/user.model';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { Tooltip } from 'primeng/tooltip';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

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
  ],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly navItems: NavItem[] = [
    { label: 'Início', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Tarefas', icon: 'pi pi-check-square', route: '/dashboard/tasks' },
    { label: 'Configurações', icon: 'pi pi-cog', route: '/dashboard/settings' },
  ];
  private readonly authService = inject(AuthService);
  protected readonly themeService = inject(ThemeService);
  /**
   * Preserva o último usuário conhecido enquanto authService.user() é null
   * (ex.: durante refresh de token ou recarregamento da página).
   */
  protected readonly user = linkedSignal<User | null, User | null>({
    source: this.authService.user,
    computation: (value, previous) => value ?? previous?.value ?? null,
  });

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
