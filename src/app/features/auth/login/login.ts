import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginCredentials } from '@core/auth/user.model';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';
import { Fluid } from 'primeng/fluid';
import { FloatLabel } from 'primeng/floatlabel';
import { Card } from 'primeng/card';
import { Tooltip } from 'primeng/tooltip';
import { PrimengTouchedDirective } from '@shared/directives/primeng-touched.directive';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    Fluid,
    FormField,
    FloatLabel,
    Card,
    Tooltip,
    PrimengTouchedDirective,
  ],
  // use On.Push, see https://angular.dev/
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
})
export class LoginComponent {
  // angular 21 tip:  use signal forms, reactive forms is dead. https://angular.dev/guide/forms/signals/overview

  credentials = signal<LoginCredentials>({
    email: '',
    password: '',
  });

  form = form(this.credentials, (paths) => {
    // doc validation signal forms -> https://angular.dev/guide/forms/signals/validation
    required(paths.email, { message: 'Preencha o email' });
    email(paths.email, { message: 'E-mail inválido' });
    required(paths.password, { message: 'Preencha a senha' });
    minLength(paths.password, 8, {
      message: 'A senha deve conter no mínimo 8 caracteres',
    });
  });

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.credentials();

    this.authService.login(credentials).then(() => this.router.navigate(['/dashboard']));
  }
}
