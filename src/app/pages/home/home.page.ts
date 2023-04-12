import { Component, OnInit } from '@angular/core';
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

    constructor(
        private router: Router, 
        private analyticsService: AnalyticsService, 
        private commonNavigation: CommonNavigationService,
        public meta: Meta, 
        public metaTitle: Title) {}

    ngOnInit() {
        // this.meta.updateTag({ property: 'og:description', content:  "description"});
    }

    goToCalculatePercentage() {
        this.commonNavigation.goToCalculatePercentagePage();
    }

    goToCalculateRuleOfThree() {
        this.commonNavigation.goToCalculateRuleOfThreePage();
    }

    goToCalculateCompoundInterest() {
        this.commonNavigation.goToCalculateCompoundInterest();
    }

}
