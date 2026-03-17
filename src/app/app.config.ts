import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {providePrimeNG} from 'primeng/config';

import {routes} from './app.routes';
import {AppPreset} from './core/theme/preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
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
