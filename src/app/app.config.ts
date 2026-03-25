import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer
} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter, TitleStrategy} from '@angular/router';
import {providePrimeNG} from 'primeng/config';

import {routes} from './app.routes';
import {AppPreset} from '@core/theme/preset';
import {ThemeService} from '@core/theme/theme.service';
import {AppTitleStrategy} from '@core/layout/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideEnvironmentInitializer(() => inject(ThemeService)),
    provideRouter(routes),
    provideHttpClient(),
    {provide: TitleStrategy, useClass: AppTitleStrategy},
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: '.dark-theme',
        },
      },
    }),
  ],
};
