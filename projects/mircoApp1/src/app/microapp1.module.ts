import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MicroApp1RoutingModule } from './microapp1-routing.module';
import { MicroApp1Component } from './microapp1.component';

@NgModule({
  declarations: [
    MicroApp1Component
  ],
  imports: [
    BrowserModule,
    MicroApp1RoutingModule
  ],
  providers: [],
  bootstrap: [MicroApp1Component]
})
export class MicroApp1Module { }
