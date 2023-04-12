import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
  selector: 'app-calculate-rule-of-three',
  templateUrl: './calculate-rule-of-three.page.html',
  styleUrls: ['./calculate-rule-of-three.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule],
  providers: [CommonNavigationService]
})
export class CalculateRuleOfThreePage implements OnInit {

    title: string = 'Regra de 3';

    sideMenuTitle: string = 'Calculadoras';

    sideMenuRelatedPages: any = this.commonNavigation.getCalculatorsRelatedPages().pages;

    constructor(private commonNavigation: CommonNavigationService) {
    }

    ngOnInit() {
    }

}
