import { Routes } from '@angular/router';

export default [
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.component'),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.component'),
  },
] as Routes;
