import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  declarations: [FeatureAComponent],
  imports: [
    CommonModule
  ],
  exports: [FeatureAComponent]
})
export class FeatureAModule { }
