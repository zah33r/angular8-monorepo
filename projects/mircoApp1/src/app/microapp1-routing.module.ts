import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureAComponent } from './feature-a/feature-a.component';


const microApp1routes: Routes = [
  { path: 'feature-a', component: FeatureAComponent }
];

@NgModule({
  imports: [RouterModule.forChild(microApp1routes)],
  exports: [RouterModule]
})
export class MicroApp1RoutingModule { }
