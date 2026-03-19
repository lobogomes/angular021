import {Routes} from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/dashboard/dashboard').then((m) => m.DashboardComponent),
    children: [
      {
        path: 'tasks',
        loadComponent: () => import('@features/tasks/tasks').then((m) => m.TasksComponent),
      },
    ]
  },

];
