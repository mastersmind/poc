import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandkumRoutingModule } from './sandkum-routing.module';
import { SandkumComponent } from './sandkum.component';


@NgModule({
  declarations: [SandkumComponent],
  imports: [
    CommonModule,
    SandkumRoutingModule
  ]
})
export class SandkumModule { }
