import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'article',
        component: PagesListComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  } 
]


export const FrontRoutingModule = RouterModule.forChild(routes);