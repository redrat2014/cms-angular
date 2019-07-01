import { VideosComponent } from './videos/videos.component';
import { FotosComponent } from './fotos/fotos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { BiografiaComponent } from './biografia/biografia.component';


const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      // {
      //   path: 'menus',
      //   component: MenusComponent
      // },
      // {
      //   path: 'posts',
      //   component: PostsComponent
      // },
      {
        path: 'biografia',
        component: BiografiaComponent
      },
      {
        path: 'repertorio',
        component: RepertorioComponent
      },
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'fotos',
        component: FotosComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  } 
]


export const AdminRoutingModule = RouterModule.forChild(routes);