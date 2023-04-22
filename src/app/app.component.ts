import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SharedComponentsModule } from './components/shared-components.module';
import { Router, NavigationEnd, RouteConfigLoadStart, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [
        IonicModule, 
        CommonModule, 
        SharedComponentsModule,
        AngularFireModule,
        FirestoreModule,
        NgxDatatableModule,
    ],
    providers: [Clipboard],
})
export class AppComponent {
    public environmentInjector = inject(EnvironmentInjector);

    activatedRoute: any;

    constructor(private router: Router, public meta: Meta, public title: Title) {
    }

    ngOnInit() {
        this.router.events.pipe(filter((event) => event instanceof ActivationEnd))
        .subscribe((event: any) => {
            const dynamicTitle = event.snapshot.data.title;
            const dynamicDescription = event.snapshot.data.description;
            if (dynamicTitle != null && dynamicTitle != undefined) {
                this.title.setTitle(`${dynamicTitle}`);
            }

            if (dynamicDescription != null && dynamicDescription != undefined) {
                this.meta.updateTag({ name: 'description', content:  dynamicDescription});
            }
        });
    }
}
