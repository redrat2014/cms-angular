import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';
import { FrontPageComponent } from './front-page.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    PagesListComponent,
    HomePageComponent,
    FrontPageComponent
  ],
  entryComponents:[

  ],
  imports: [
    CommonModule,
    FrontRoutingModule

  ]
})
export class FrontPageModule { }
