import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as microapp1ENV } from 'projects/microApp1/src/environments/environment.microapp1';

microapp1ENV.standalone = false;

const routes: Routes = [
  {
    path: 'microapp1', loadChildren: () => import('../../../microApp1/src/app/microapp1.module')
      .then(mod => mod.MicroApp1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
