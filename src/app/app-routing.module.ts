import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'sandkum', loadChildren: () => import('./sandkum/sandkum.module').then(m => m.SandkumModule) },
  { path: 'tms', loadChildren: () => import('./tms/tms.module').then(m => m.TmsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
