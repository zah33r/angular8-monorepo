import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { environment } from '../environments/environment.microapp1';


const microApp1routes: Routes = [
  { path: 'feature-a', component: FeatureAComponent }
];

@NgModule({
  imports: [environment.standalone ? RouterModule.forRoot(microApp1routes) : RouterModule.forChild(microApp1routes)],
  exports: [RouterModule]
})
export class MicroApp1RoutingModule { }
