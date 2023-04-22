import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

import { Chart, ChartConfiguration } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
        NgChartsModule,
        NgxDatatableModule
    ],
    providers: [CommonNavigationService],
    // encapsulation: ViewEncapsulation.None
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

    showGraphic = true;
    showTable = false;

    barChart: any;
    // @ViewChild('barCanvas') private barCanvas: ElementRef | any;

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public columns: any = [
        {prop: 'Mês'},
        {prop: 'Juros'},
        {prop: 'Total Investido'},
        {prop: 'Total de Juros'},
        {prop: 'Valor Total'},
    ];

    public rows: any = [];
    monthDetailResult: MonthDetail[] = [];

    constructor(private commonNavigation: CommonNavigationService, private route: ActivatedRoute) {
    }

    ngOnInit() {
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
        // this.barChartMethod();
    }

    get isGraphicOpen() {
        return this.showGraphic;
    }

    get isTableOpen() {
        return this.showTable;
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

        console.log(this.interval);
      
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

        result.forEach(row => {
            let month = row.month;
            let interest = row.interest.toFixed(2);
            let totalInvested = row.totalInvested.toFixed(2);
            let totalInterest = row.totalInterest.toFixed(2);
            let totalValue = row.totalValue.toFixed(2);

            this.rows.push(
                {
                    "Mês": month,
                    "Juros": interest,
                    "Total Investido": totalInvested,
                    "Total de Juros": totalInterest,
                    "Valor Total": totalValue
                }
            );
        });

        console.log(this.rows);

        this.monthDetailResult = result;

        
        this.barChartMethod();
    }

    calculateAnualCompoundInterest(initialValue: number, anualTax: number) {
        const twelveMonths: number = 12;

        let base: number = initialValue * (1 + anualTax / twelveMonths);
        let power: number = (twelveMonths * 1 / 12);

        let calculatedValue: number = Math.pow(base, power);

        return calculatedValue;
    }

    segmentChange(event: any) {
        console.log(event.detail.value);

        if (event.detail.value == 'table') {
            this.showGraphic = false;
            this.showTable = true;
        } else {
            this.showGraphic = true;
            this.showTable = false;
        }
        
    }


    async barChartMethod() {
        // if (this.barChart == null) {

        //     console.log();

        //     this.barChart = new Chart(this.barCanvas.nativeElement, {
        //         type: 'bar',
        //         data: {
        //         labels: this.getChartLabels(),
        //         datasets: this.getChartDataSets()
        //         },
        //         options: {
        //             scales: {
        //                 y: {
        //                     ticks: {
        //                         callback: function(value, index, ticks) {
        //                             return 'R$' + value;
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     });
        // }

        console.log(this.barChartData.labels);
        console.log(JSON.stringify(this.barChartData.datasets));

        await this.barChartData.labels?.pop();
        await this.barChartData.datasets?.pop();

        // let labels = [];

        // array.forEach(element => {
            
        // });

        console.log(this.barChartData.labels);
        console.log(this.barChartData.datasets);
        
        this.barChartData.labels = this.getChartLabels();
        this.barChartData.datasets = this.getChartDataSets();

        console.log(this.barChartData.labels);
        console.log(JSON.stringify(this.barChartData.datasets));
        
        
        this.chart?.update();
    }

    getChartLabels() {
        let result: any = [];

        this.monthDetailResult.forEach((month:any) => {
            result.push(month.month);
        });

        return result;
    }

    getChartDataSets() {
        let result: any = [];

        let interestArray: any = [];
        let totalInvestedArray: any = [];

        this.monthDetailResult.forEach((month:any) => {
            interestArray.push(month.totalInterest);
            totalInvestedArray.push(month.totalInvested);
        });
        
        result = [
            { data: totalInvestedArray, label: 'Valor investido' },
            { data: interestArray, label: 'Total em juros' }
        ];

        return result;
    }

    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: [ '00', '01' ], //meses
        datasets: [
            { data: [ 15000, 15125 ], label: 'Valor investido' },
            { data: [ 0, 520 ], label: 'Total em juros' }
        ]
    };

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: true,
    };

}

class MonthDetail {
    month: any = 0;
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