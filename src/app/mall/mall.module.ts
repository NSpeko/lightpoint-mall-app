import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallListComponent } from './mall-list/mall-list.component';
import { MallItemComponent } from './mall-item/mall-item.component';
import { MallMapComponent } from './mall-map/mall-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MallRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [
    MallListComponent,
    MallItemComponent,
    MallMapComponent,
  ]
})
export class MallModule { }
