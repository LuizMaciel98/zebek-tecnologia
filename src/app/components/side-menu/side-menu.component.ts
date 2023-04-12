import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

    @Input() title: string | any;
    @Input() relatedPages: any;

    constructor(private router: Router) { }

    ngOnInit() {
        console.log(this.relatedPages);
        if (this.relatedPages != null && this.relatedPages != undefined) {
            console.log(this.relatedPages);
        }
    }

    navigateToPage(link: string) {
        console.log(link);
        this.router.navigate([link]);
    }

}
