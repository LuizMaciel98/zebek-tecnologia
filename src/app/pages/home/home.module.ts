import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-9345813623099375',
      adSlot: 6328943273,
    }),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}