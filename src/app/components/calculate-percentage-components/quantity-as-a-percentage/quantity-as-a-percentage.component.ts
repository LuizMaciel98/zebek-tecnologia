import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-quantity-as-a-percentage',
    templateUrl: './quantity-as-a-percentage.component.html',
    styleUrls: ['./quantity-as-a-percentage.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class QuantityAsAPercentageComponent  implements OnInit {

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
        let currentInitialNumber: number = parseFloat(this.initialNumber.value.replace(',','.'));
        let currentfinalNumber: number = parseFloat(this.finalNumber.value.replace(',','.'));
        
        this.result = String((currentInitialNumber / currentfinalNumber) * 100).replace('.', ',') + '%';
    }

    // maskPercentage(event: any) {
    //     let aux = event?.detail?.value;
        
    //     if(aux != undefined) {
    //         aux.replace('%','');
    //         this.percentagemWithSimbol = this.percentagemWithSimbol.replace('%','');
            
    //         if(aux.length == 0) {
    //             this.percentagemWithSimbol = "";
    //         } else {
    //             this.percentagemWithSimbol = this.percentagemWithSimbol + "%";
    //         }
    //     }
        
    // }

}
