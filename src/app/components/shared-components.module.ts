import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent, SideMenuComponent]
})
export class SharedComponentsModule {
}