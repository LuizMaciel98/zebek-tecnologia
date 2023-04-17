import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

import { Chart, ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-result-compound-interest',
    templateUrl: './result-compound-interest.page.html',
    styleUrls: ['./result-compound-interest.page.scss'],
    standalone: true,
    imports: [
        IonicModule, 
        CommonModule, 
        FormsModule, 
        SharedComponentsModule, 
        NgChartsModule
    ],
    providers: [CommonNavigationService]
})
export class ResultCompoundInterestPage implements OnInit {

    title: string = 'Resultado Juros Compostos';

    sideMenuTitle: string = 'Calculadoras';
    sideMenuRelatedPages: any = this.commonNavigation.getCalculatorsRelatedPages().pages;

    initialValue: number | any;
    monthlyValue: number | any;
    interestRate: number | any;
    interestRange: string | any; 
    periodIn: number | any;
    interval: string | any;

    totalFinalValue: number | any;
    investedFinalValue: number | any;
    interestFinalValue: number | any;

    barChart: any;

    constructor(private commonNavigation: CommonNavigationService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        // try{
        //     document.querySelector("meta[name='description']").remove();
        //   } catch (e){
      
        //   }
        //   try{
        //     document.querySelector("meta[name='keywords']").remove();
        //   } catch (e){
      
        //   }
      
        //   // Add the new META-Tags
        //   var description = document.createElement('meta');
        //   description.name = "description";
        //   description.content = "Weeklystyle - Die neueste Mode, Musik und Events. Täglich aktualisierte Daten und ausgesuchte Produkte. Viel Spass beim stöbern und träumen.";
        //   document.getElementsByTagName('head')[0].appendChild(description);

        const queryParams: any = this.route.snapshot.queryParamMap.get('queryParams');

        this.initialValue   = Number(this.route.snapshot.queryParamMap.get('initialValue'));
        this.monthlyValue   = Number(this.route.snapshot.queryParamMap.get('monthlyValue'));
        this.interestRate   = Number(this.route.snapshot.queryParamMap.get('interestRate'));
        this.interestRange  = this.route.snapshot.queryParamMap.get('interestRange');
        this.periodIn       = Number(this.route.snapshot.queryParamMap.get('periodIn'));
        this.interval       = this.route.snapshot.queryParamMap.get('interval');

        this.calculateResult();

        console.log('totalFinalValue: ' + this.totalFinalValue); 
        console.log('investedFinalValue: ' + this.investedFinalValue); 
        console.log('interestFinalValue: ' + this.interestFinalValue); 
    }

    ngAfterViewInit () {
        this.barChartMethod();
    }

    get formattedInitialValue() {
        return 'R$ ' + this.initialValue.toFixed(2);
    }
    
    get formattedMonthlyValue() {
        if (this.monthlyValue) {
            return 'R$ ' + this.monthlyValue.toFixed(2);
        } else {
            return 'R$ 0';
        }
    }

    get formattedInterest() {
        let interest = this.interestRate*100;

        if (this.interestRange == 'annually') {
            return interest.toFixed(2) + '% (Anual)';
        } else {
            return interest.toFixed(2) + '% (Mensal)';
        }
    }

    get formattedPeriod() {
        if (this.interval == 'years') {
            return this.periodIn + ' Anos';
        } else if (this.interval == 'months') {
            return this.periodIn + ' Meses';
        } else {
            return this.periodIn + ' Dias';
        }
    }

    get formattedTotalFinalValue() {
        return 'R$ ' + this.totalFinalValue.toFixed(2);
    }

    get formattedInvestedValue() {
        return 'R$ ' + this.investedFinalValue.toFixed(2);
    }

    get formattedInterestFinalValue() {
        return 'R$ ' + this.interestFinalValue.toFixed(2);
    }

    calculateResult() {
        let periods: number;

        this.totalFinalValue = 0;
        this.investedFinalValue = 0;
        this.interestFinalValue = 0;
      
        switch(this.interval) {
          case 'years':
            periods = this.periodIn * 12;
            break;
          case 'months':
            periods = this.periodIn;
            break;
          default:
            throw new Error('Invalid interval');
        }

        this.initialValue = this.initialValue;
        this.investedFinalValue = this.initialValue;
        this.totalFinalValue = this.initialValue;

        let result: MonthDetail[] = [];

        let previousTotalValue = 0;
        
        for(let i = 0; i <= periods; i++) {
            
            if(i != 0) {
                this.totalFinalValue = this.totalFinalValue + this.monthlyValue;
            }
            
            if(i==0) {
                previousTotalValue = this.totalFinalValue;
                result.push(new MonthDetail(i, 0, this.investedFinalValue, this.interestFinalValue, this.totalFinalValue));
                this.totalFinalValue = this.calculateAnualCompoundInterest(this.totalFinalValue, this.interestRate);
            } else {
                
                this.investedFinalValue += this.monthlyValue;
                this.interestFinalValue = this.totalFinalValue - this.investedFinalValue;
                let interest = this.totalFinalValue - previousTotalValue - this.monthlyValue;
                result.push(new MonthDetail(i, interest, this.investedFinalValue, this.interestFinalValue, this.totalFinalValue));
                previousTotalValue = this.totalFinalValue;
                if(i != periods) {
                    this.totalFinalValue = this.calculateAnualCompoundInterest(this.totalFinalValue, this.interestRate);
                }
            }
        }

        console.log(result);

    }

    calculateAnualCompoundInterest(initialValue: number, anualTax: number) {
        const twelveMonths: number = 12;

        let base: number = initialValue * (1 + anualTax / twelveMonths);
        let power: number = (twelveMonths * 1 / 12);

        let calculatedValue: number = Math.pow(base, power);

        return calculatedValue;
    }


    barChartMethod() {

    }

    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
        datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Valor investido' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Total em juros' }
        ]
    };

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: false,
    };

}

class MonthDetail {
    month: number = 0;
    interest: number = 0;
    totalInvested: number = 0;
    totalInterest: number = 0;
    totalValue: number = 0;

    constructor(month: number, interest: number, totalInvested: number, totalInterest: number, totalValue: number) {
        this.month = month;
        this.interest = interest;
        this.totalInvested = totalInvested;
        this.totalInterest = totalInterest;
        this.totalValue = totalValue;
    }
}