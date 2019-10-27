import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'microapp1', loadChildren: () => import('../../../mircoApp1/src/app/microapp1.module')
      .then(mod => mod.MicroApp1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
