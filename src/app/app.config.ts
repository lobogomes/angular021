import {ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {providePrimeNG} from 'primeng/config';

import {routes} from './app.routes';
import {AppPreset} from '@core/theme/preset';
import {ThemeService} from '@core/theme/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideEnvironmentInitializer(() => inject(ThemeService)),
    provideRouter(routes),
    provideHttpClient(),
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
