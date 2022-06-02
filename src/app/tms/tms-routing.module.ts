import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmsComponent } from './tms.component';

const routes: Routes = [{ path: '', component: TmsComponent }, { path: 'page1', loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmsRoutingModule { }
