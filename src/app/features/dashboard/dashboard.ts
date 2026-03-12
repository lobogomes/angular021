import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 class="text-2xl font-bold">Bem-vindo, {{ authService.user()?.email }}</h1>
      <p-button label="Sair" severity="secondary" (onClick)="authService.logout()" />
    </div>
  `,
})
export class DashboardComponent {
  readonly authService = inject(AuthService);
}
