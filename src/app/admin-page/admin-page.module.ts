
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminPageComponent,
    AppNavbarComponent,
    MenusComponent,
    PostsComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogComponent,
    EditMenuComponent,
    EditPostComponent,
    BiografiaComponent,
    RepertorioComponent,
    AgendaComponent,
    FotosComponent,
    VideosComponent,
    ProjetosComponent,
  ],
  entryComponents:[
    ConfirmationDialogComponent, 
    EditMenuComponent, 
    EditPostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ]
})
export class AdminPageModule { }
