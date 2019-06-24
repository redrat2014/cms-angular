
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './../app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';

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
  ],
  entryComponents:[ConfirmationDialogComponent, EditMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminPageModule { }
