import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PercentageBetweenTwoQuantitiesComponent } from './percentage-between-two-quantities.component';

describe('PercentageBetweenTwoQuantitiesComponent', () => {
  let component: PercentageBetweenTwoQuantitiesComponent;
  let fixture: ComponentFixture<PercentageBetweenTwoQuantitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageBetweenTwoQuantitiesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PercentageBetweenTwoQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
