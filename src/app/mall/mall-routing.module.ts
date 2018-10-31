import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MallListComponent} from './mall-list/mall-list.component';

const routes: Routes = [
  {
    path: '',
    component: MallListComponent,
    data: {
      title: 'Malls'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
