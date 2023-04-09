import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-percent-decrease-of-value',
    templateUrl: './percent-decrease-of-value.component.html',
    styleUrls: ['./percent-decrease-of-value.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class PercentDecreaseOfValueComponent  implements OnInit {

    calculation: FormGroup | any;

    result: number | any;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.calculation = this.fb.group({
            initialNumber: ['', [Validators.required]],
            finalNumber: ['', [Validators.required]]
        });
    }

    percentagemWithSimbol: string | any;
    
    get initialNumber() {
        return this.calculation.get('initialNumber');
    }

    get finalNumber() {
        return this.calculation.get('finalNumber');
    }

    copyString(){
        navigator.clipboard.writeText(this.result);
    }

    calculate() {
        // console.log('calculate');
        let currentInitialNumber: number = parseFloat(this.initialNumber.value.replace(',','.'));
        // console.log(currentInitialNumber);
        let currentfinalNumber: number = parseFloat(this.finalNumber.value.replace(',','.'));
        // console.log(currentfinalNumber);

        let firstStep: number = currentfinalNumber / currentInitialNumber;
        // console.log('firstStep: ' + firstStep);
        let secondStep = (firstStep * 10 * 10 - 100) * -1;
        // console.log('secondStep: ' + secondStep);
        
        this.result = String(secondStep).replace('.', ',') + '%';
    }

}
