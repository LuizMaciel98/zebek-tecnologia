import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../../components/shared-components.module';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
    selector: 'app-result-compound-interest',
    templateUrl: './result-compound-interest.page.html',
    styleUrls: ['./result-compound-interest.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule],
    providers: [CommonNavigationService]
})
export class ResultCompoundInterestPage implements OnInit {

    title: string = 'Regra de 3';

    sideMenuTitle: string = 'Calculadoras';

    sideMenuRelatedPages: any = this.commonNavigation.getCalculatorsRelatedPages().pages;

    constructor(private commonNavigation: CommonNavigationService) {
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

        // // this.route.snapshot.queryParamMap
    }

}
