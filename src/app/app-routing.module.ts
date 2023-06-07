import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment11Component } from './assignment1.1/assignment1.1.component';
import { Assignment12Component } from './assignment1.2/assignment1.2.component';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('./map/map-routing.module').then((m) => m.MapRoutingModule),
  },
  {
    path: 'assignment1-1',
    component: Assignment11Component
  },
  {
    path: 'assignment1-2',
    component: Assignment12Component
  },
  // {
  //   path: 'comment'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
