import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { components } from './main.content';
import { routes } from './main.routes';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})

export class MainModule { }
