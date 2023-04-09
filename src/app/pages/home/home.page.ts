import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

import { SharedComponentsModule } from '../../components/shared-components.module';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, SharedComponentsModule],
})
export class HomePage implements OnInit {

    title: string = 'Home Page';

    constructor(private router: Router, private analyticsService: AnalyticsService) {}

    ngOnInit() {}

    goToCalculatePercentage() {
        this.router.navigate(['/calculadora-porcentagem']);
    }

}
