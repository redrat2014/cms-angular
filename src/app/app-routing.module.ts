import { HomePageComponent } from './front-page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  // {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule), canActivate: [AdminGuard]},
  {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule)},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
