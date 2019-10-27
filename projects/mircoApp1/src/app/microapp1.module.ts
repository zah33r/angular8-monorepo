import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MicroApp1RoutingModule } from './microapp1-routing.module';
import { MicroApp1Component } from './microapp1.component';
import { FeatureAModule } from './feature-a/feature-a.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MicroApp1Component,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    MicroApp1RoutingModule,
    FeatureAModule
  ],
  providers: [],
  bootstrap: [MicroApp1Component]
})
export class MicroApp1Module { }
