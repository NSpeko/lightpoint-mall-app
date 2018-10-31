import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallDetailsRoutingModule } from './mall-details-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MallDetailsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItemDetailsComponent]
})
export class MallDetailsModule { }
