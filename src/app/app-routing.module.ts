import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication-pages.module').then(
        m => m.AuthenticationPagesModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
