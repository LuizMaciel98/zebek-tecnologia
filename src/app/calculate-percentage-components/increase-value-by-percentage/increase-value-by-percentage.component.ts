import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-increase-value-by-percentage',
    templateUrl: './increase-value-by-percentage.component.html',
    styleUrls: ['./increase-value-by-percentage.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class IncreaseValueByPercentageComponent  implements OnInit {

    calculation: FormGroup | any;

    result: number | any;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.calculation = this.fb.group({
            percentage: ['', [Validators.required]],
            calculatedNumber: ['', [Validators.required]]
        });
    }

    percentageWithSimbol: string | any;
    
    get percentage() {
		return this.calculation.get('percentage');
	}

	get calculatedNumber() {
		return this.calculation.get('calculatedNumber');
	}

    copyString(){
        navigator.clipboard.writeText(this.result);
    }

    calculate() {
        let currentPercentage: number = parseFloat(this.percentage.value.replace('%','').replace(',','.'));
        let currentCalculatedNumber: number = parseFloat(this.calculatedNumber.value.replace(',','.'));

        console.log(currentPercentage);
        
        this.result = String(currentCalculatedNumber + (currentCalculatedNumber * currentPercentage/100)).replace('.', ',');
    }

    maskPercentage(event: any) {
        let aux = event?.detail?.value;
        
        if(aux != undefined) {
            aux.replace('%','');
            this.percentageWithSimbol = this.percentageWithSimbol.replace('%','');
            
            if(aux.length == 0) {
                this.percentageWithSimbol = "";
            } else {
                this.percentageWithSimbol = this.percentageWithSimbol + "%";
            }
        }
        
    }


}
