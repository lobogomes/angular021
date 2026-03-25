import {effect, Injectable, signal} from '@angular/core';

const STORAGE_KEY = 'theme:dark';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly _dark = signal(localStorage.getItem(STORAGE_KEY) === 'true');
  readonly dark = this._dark.asReadonly();

  constructor() {
    document.documentElement.classList.toggle('dark-theme', this._dark());

    effect(() => {
      localStorage.setItem(STORAGE_KEY, String(this._dark()));
      document.documentElement.classList.toggle('dark-theme', this._dark());
    });
  }

  toggle(): void {
    this._dark.update((v) => !v);
  }
}
