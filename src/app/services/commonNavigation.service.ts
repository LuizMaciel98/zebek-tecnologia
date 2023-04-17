import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const HOME_PATH = '/home';
const ABOUT_PATH = '/sobre';
const TOOLS_PATH = '/ferramentas';
const PERCENTAGE_CALCULATOR_PATH = '/calculadora-porcentagem';
const RULE_OF_THREE_CALCULATOR_PATH = '/calculadora-regra-tres';
const COMPOUND_INTEREST_CALCULATOR_PATH = '/calculadora-juros-compostos';
const BLOG_PATH = '/blog';

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

    constructor(private router: Router, private titleService: Title) {}

    goToHomePage() {
        this.navigate(HOME_PATH);
    }
    
    goToAboutPage() {
        this.navigate(ABOUT_PATH);
    }
    
    goToToolsPage() {
        this.navigate(TOOLS_PATH);
    }

    goToCalculatePercentagePage() {
        this.navigate(PERCENTAGE_CALCULATOR_PATH);
    }
    
    goToCalculateRuleOfThreePage() {
        this.navigate(RULE_OF_THREE_CALCULATOR_PATH);
    }
    
    goToCalculateCompoundInterest() {
        this.navigate(COMPOUND_INTEREST_CALCULATOR_PATH);
    }
    
    goToBlogPage() {
        this.navigate(BLOG_PATH);
    }

    getCalculatorsRelatedPages() {
        return CALCULATORS_RELATED_PAGES;
    }

    navigate(path: string) {
        this.router.navigate([path], { replaceUrl: true });
    }

    setPageTitle(title: string) {
        this.titleService.setTitle(title);
    }

}