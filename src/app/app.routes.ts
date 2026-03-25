import {Routes} from '@angular/router';
import {authGuard} from '@core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@core/layout/main/main').then(m => m.Main),
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@features/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
        canActivate: [authGuard],
      },
      {
        path: 'tasks',
        loadChildren: () => import('@features/tasks/tasks.routes').then((m) => m.TASKS_ROUTES),
        canActivate: [authGuard],
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('@features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

];
