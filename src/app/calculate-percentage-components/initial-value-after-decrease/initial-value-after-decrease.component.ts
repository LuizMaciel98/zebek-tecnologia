import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-initial-value-after-decrease',
    templateUrl: './initial-value-after-decrease.component.html',
    styleUrls: ['./initial-value-after-decrease.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class InitialValueAfterDecreaseComponent  implements OnInit {

    calculation: FormGroup | any;

    result: number | any;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.calculation = this.fb.group({
            percentage: ['', [Validators.required]],
            finalNumber: ['', [Validators.required]]
        });
    }

    percentageWithSimbol: string | any;
    
    get percentage() {
		return this.calculation.get('percentage');
	}

	get finalNumber() {
		return this.calculation.get('finalNumber');
	}

    copyString(){
        navigator.clipboard.writeText(this.result);
    }

    calculate() {
        let currentPercentage: number = parseFloat(this.percentage.value.replace('%','').replace(',','.'));
        let currentfinalNumber: number = parseFloat(this.finalNumber.value.replace(',','.'));

        console.log(currentPercentage);
        
        this.result = String(currentfinalNumber / (1 - currentPercentage/100)).replace('.', ',');
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
