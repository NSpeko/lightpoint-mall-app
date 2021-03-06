import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/malls',
    pathMatch: 'full'
  },
  {
    path: 'malls',
    loadChildren: './mall/mall.module#MallModule',
  },
  {
    path: 'mall/details',
    loadChildren: './mall-details/mall-details.module#MallDetailsModule',
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
