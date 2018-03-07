import { NgModule } from '@angular/core';
import { modules } from './shared.content';

@NgModule({
  imports: [
    ...modules
  ],
  providers: [],
  exports: [
    ...modules
  ]
})

export class SharedModule { }
