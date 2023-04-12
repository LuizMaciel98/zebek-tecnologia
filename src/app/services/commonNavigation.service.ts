import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const HOME_PATH = '/home';
const ABOUT_PATH = '/sobre';
const TOOLS_PATH = '/ferramentas';
const PERCENTAGE_CALCULATOR_PATH = '/calculadora-porcentagem';
const RULE_OF_THREE_CALCULATOR_PATH = '/calculadora-regra-tres';
const COMPOUND_INTEREST_CALCULATOR_PATH = '/calculadora-juros-compostos';

const CALCULATORS_RELATED_PAGES = {
    "pages": [
        {
            "name": "Calculadora Porcentagem",
            "link": PERCENTAGE_CALCULATOR_PATH
        },
        {
            "name": "Calculadora Regra de três",
            "link": RULE_OF_THREE_CALCULATOR_PATH
        },
        {
            "name": "Calculadora de Juros Compostos",
            "link": COMPOUND_INTEREST_CALCULATOR_PATH
        }
    ]
};

@Injectable()
export class CommonNavigationService {

    constructor(private router: Router) {}

    goToHomePage() {
        this.router.navigate([HOME_PATH]);
    }
    
    goToAboutPage() {
        this.router.navigate([ABOUT_PATH]);
    }
    
    goToToolsPage() {
        this.router.navigate([TOOLS_PATH]);
    }

    goToCalculatePercentagePage() {
        this.router.navigate([PERCENTAGE_CALCULATOR_PATH])
    }
    
    goToCalculateRuleOfThreePage() {
        this.router.navigate([RULE_OF_THREE_CALCULATOR_PATH])
    }
    
    goToCalculateCompoundInterest(){
        this.router.navigate([COMPOUND_INTEREST_CALCULATOR_PATH])
    }

    getCalculatorsRelatedPages() {
        return CALCULATORS_RELATED_PAGES;
    }

}