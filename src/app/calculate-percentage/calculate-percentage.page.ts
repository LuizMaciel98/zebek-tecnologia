import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PercentageOfQuantityComponent } from '../calculate-percentage-components/percentage-of-quantity/percentage-of-quantity.component';
import { QuantityAsAPercentageComponent } from '../calculate-percentage-components/quantity-as-a-percentage/quantity-as-a-percentage.component';
import { PercentIncreaseOfValueComponent } from '../calculate-percentage-components/percent-increase-of-value/percent-increase-of-value.component';
import { PercentDecreaseOfValueComponent } from '../calculate-percentage-components/percent-decrease-of-value/percent-decrease-of-value.component';
import { PercentageBetweenTwoQuantitiesComponent } from '../calculate-percentage-components/percentage-between-two-quantities/percentage-between-two-quantities.component';
import { IncreaseValueByPercentageComponent } from '../calculate-percentage-components/increase-value-by-percentage/increase-value-by-percentage.component';
import { DecreaseValueByPercentageComponent } from '../calculate-percentage-components/decrease-value-by-percentage/decrease-value-by-percentage.component';
import { InitialValueAfterIncreaseComponent } from '../calculate-percentage-components/initial-value-after-increase/initial-value-after-increase.component';
import { InitialValueAfterDecreaseComponent } from '../calculate-percentage-components/initial-value-after-decrease/initial-value-after-decrease.component';


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
        InitialValueAfterDecreaseComponent
    ] 

})// FormsModule, ReactiveFormsModule
export class CalculatePercentagePage implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
