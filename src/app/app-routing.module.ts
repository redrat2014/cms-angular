import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./front-page/front-page.module').then(p => p.FrontPageModule)},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule), canActivate: [AdminGuard]},
  {path: '**', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
