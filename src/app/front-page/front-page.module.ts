import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';
import { FrontPageComponent } from './front-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MaterialModule } from '../admin-page/material';
import { PagesComponent } from './pages/pages.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  declarations: [
    PagesListComponent,
    HomePageComponent,
    FrontPageComponent,
    AppNavbarComponent,
    PagesComponent
  ],
  entryComponents:[

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ]
})
export class FrontPageModule { }
