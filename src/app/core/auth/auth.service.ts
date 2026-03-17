import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials, User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(null);

  readonly user = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this._currentUser());

  // REMOVE THIS
  constructor() {
    this._currentUser.set({
      id: '1',
      name: 'Amanda',
      email: 'amanda@cat.com',
      username: 'frutinha',
    });
  }

  login(credentials: LoginCredentials): Promise<void> {
    // TODO: substituir por chamada HTTP
    // return this.http.post<User>('/api/auth/login', credentials)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          this._currentUser.set({
            id: '1',
            name: 'Amanda',
            email: credentials.email,
            username: 'frutinha',
          });
          resolve();
        } else {
          reject(new Error('Credenciais inválidas'));
        }
      }, 1000);
    });
  }

  logout(): void {
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
