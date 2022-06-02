import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandkumComponent } from './sandkum.component';

const routes: Routes = [{ path: '', component: SandkumComponent }, { path: 'page1', loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandkumRoutingModule { }
