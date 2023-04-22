import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Router, NavigationExtras } from '@angular/router';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
  selector: 'app-calculate-compound-interest',
  templateUrl: './calculate-compound-interest.page.html',
  styleUrls: ['./calculate-compound-interest.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule, ReactiveFormsModule],
  providers: [CommonNavigationService]
})
export class CalculateCompoundInterestPage implements OnInit {

    title: string = 'Calculadora de Juros Compostos';

    sideMenuTitle : string = 'Calculadoras';
    _commonNavigationService = inject(CommonNavigationService);
    sideMenuRelatedPages: any = this._commonNavigationService.getCalculatorsRelatedPages().pages;

    compoundInterestCalculator: FormGroup | any;
    
    // initialValue      : number = 0;
    // monthlyValue      : number = 0;
    // InterestRate      : number = 0;
    interestRangeValue     : string = 'annually';
    // periodIn          : number = 0;
    intervalValue          : string = 'years';

    constructor(private router: Router, private fb: FormBuilder) {
        // this._commonNavigationService.setPageTitle(this.title + ' - Zebek Tecnologia');
    }

    ngOnInit() {

        const url = location.href.replace(location.origin, '');
        console.log(url);
        this.router.navigateByUrl(url);

        this.compoundInterestCalculator = this.fb.group({
            initialValue:   ['', [Validators.required]],
            monthlyValue:   ['', []],
            interestRate:   ['', [Validators.required]],
            interestRange:  ['', [Validators.required]],
            periodIn:       ['', [Validators.required]],
            interval:       ['', [Validators.required]]
        });
    }

    get initialValue() {
        return this.compoundInterestCalculator.get('initialValue');
    }
    get monthlyValue() {
        return this.compoundInterestCalculator.get('monthlyValue');
    }
    get interestRate() {
        return this.compoundInterestCalculator.get('interestRate');
    }
    get interestRange() {
        return this.compoundInterestCalculator.get('interestRange');
    }
    get periodIn() {
        return this.compoundInterestCalculator.get('periodIn');
    }
    get interval() {
        return this.compoundInterestCalculator.get('interval');
    }

    calculate() {



      const params: NavigationExtras = {
        queryParams: {
            initialValue: this.initialValue.value,
            monthlyValue: this.monthlyValue.value,
            interestRate: this.interestRate.value/100,
            interestRange: this.interestRange.value,
            periodIn: this.periodIn.value,
            interval: this.interval.value,
        },
      };
      console.log(params);
      console.log(JSON.stringify(params));
      this.router.navigate(['calculadora-juros-compostos/resultado'], params);
      
    }

}
