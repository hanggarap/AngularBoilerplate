import { Routes } from '@angular/router';
import { MainComponent } from './main';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: "app/main/main.module#MainModule"
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  }
]
