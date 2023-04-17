import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { Meta, Title } from '@angular/platform-browser';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, SharedComponentsModule],
    providers: [CommonNavigationService]
})
export class HomePage implements OnInit {

    title: string = 'Home Page';

    _commonNavigationService = inject(CommonNavigationService);

    constructor(
        private router: Router, 
        private analyticsService: AnalyticsService, 
        public meta: Meta, 
        public metaTitle: Title) {}

    ngOnInit() {
        // this._commonNavigationService.setPageTitle(this.title + ' - Zebek Tecnologia');
        // this.meta.updateTag({ property: 'og:description', content:  "description"});
    }

    goToCalculatePercentage() {
        this._commonNavigationService.goToCalculatePercentagePage();
    }

    goToCalculateRuleOfThree() {
        this._commonNavigationService.goToCalculateRuleOfThreePage();
    }

    goToCalculateCompoundInterest() {
        this._commonNavigationService.goToCalculateCompoundInterest();
    }

}
