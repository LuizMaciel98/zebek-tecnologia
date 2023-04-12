import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
  selector: 'app-calculate-compound-interest',
  templateUrl: './calculate-compound-interest.page.html',
  styleUrls: ['./calculate-compound-interest.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule],
  providers: [CommonNavigationService]
})
export class CalculateCompoundInterestPage implements OnInit {

    title: string = 'Juros Compostos';

    sideMenuTitle: string = 'Calculadoras';
    sideMenuRelatedPages: any = this.commonNavigation.getCalculatorsRelatedPages().pages;

    constructor(private commonNavigation: CommonNavigationService) {
    }

    ngOnInit() {
    }

}
