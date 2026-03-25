import {Routes} from '@angular/router';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/tasks/tasks').then((m) => m.TasksComponent),
    children: []
  }

];
