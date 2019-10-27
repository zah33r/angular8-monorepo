import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const microApp1routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(microApp1routes)],
  exports: [RouterModule]
})
export class MicroApp1RoutingModule { }
