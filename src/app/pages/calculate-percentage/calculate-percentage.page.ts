import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PercentageOfQuantityComponent } from '../../components/calculate-percentage-components/percentage-of-quantity/percentage-of-quantity.component';
import { QuantityAsAPercentageComponent } from '../../components/calculate-percentage-components/quantity-as-a-percentage/quantity-as-a-percentage.component';
import { PercentIncreaseOfValueComponent } from '../../components/calculate-percentage-components/percent-increase-of-value/percent-increase-of-value.component';
import { PercentDecreaseOfValueComponent } from '../../components/calculate-percentage-components/percent-decrease-of-value/percent-decrease-of-value.component';
import { PercentageBetweenTwoQuantitiesComponent } from '../../components/calculate-percentage-components/percentage-between-two-quantities/percentage-between-two-quantities.component';
import { IncreaseValueByPercentageComponent } from '../../components/calculate-percentage-components/increase-value-by-percentage/increase-value-by-percentage.component';
import { DecreaseValueByPercentageComponent } from '../../components/calculate-percentage-components/decrease-value-by-percentage/decrease-value-by-percentage.component';
import { InitialValueAfterIncreaseComponent } from '../../components/calculate-percentage-components/initial-value-after-increase/initial-value-after-increase.component';
import { InitialValueAfterDecreaseComponent } from '../../components/calculate-percentage-components/initial-value-after-decrease/initial-value-after-decrease.component';

import { SharedComponentsModule } from '../../components/shared-components.module';

@Component({
    selector: 'app-calculate-percentage',
    templateUrl: './calculate-percentage.page.html',
    styleUrls: ['./calculate-percentage.page.scss'],
    standalone: true,
    imports: [
        IonicModule, 
        CommonModule, 
        PercentageOfQuantityComponent,
        QuantityAsAPercentageComponent,
        PercentIncreaseOfValueComponent,
        PercentDecreaseOfValueComponent,
        PercentageBetweenTwoQuantitiesComponent,
        IncreaseValueByPercentageComponent,
        DecreaseValueByPercentageComponent,
        InitialValueAfterIncreaseComponent,
        InitialValueAfterDecreaseComponent,
        SharedComponentsModule,
    ],
    providers: [
        
    ]

})
export class CalculatePercentagePage implements OnInit {

    title: string = 'Calculadora de Porcentagem';

    constructor() { }

    ngOnInit() {

    }

}
