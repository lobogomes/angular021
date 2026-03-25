import {Component, computed, inject} from '@angular/core';
import {LayoutService} from '@core/layout/layout.service';
import {AuthService} from '@core/auth/auth.service';
import {User} from '@core/auth/user.model';
import {ClassNames} from 'primeng/classnames';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {Avatar} from 'primeng/avatar';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    ClassNames,
    Button,
    Tooltip,
    Avatar,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar {

  protected readonly authService = inject(AuthService);
  protected readonly layoutService = inject(LayoutService);

  protected readonly asideClass = computed(() => {
    if (this.layoutService.isMobile()) {
      return this.layoutService.openedSidebar()
        ? 'h-full fixed inset-y-0 left-0 z-50 w-64 flex flex-1 flex-col bg-surface-200 shadow-2xl'
        : 'hidden';
    }
    const width = this.layoutService.openedSidebar() ? 'w-64' : 'w-16';
    return `flex flex-col bg-surface-200 h-full shadow-md transition-[width] duration-300 overflow-hidden ${width}`;
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
