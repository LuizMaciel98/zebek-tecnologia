import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncreaseValueByPercentageComponent } from './increase-value-by-percentage.component';

describe('IncreaseValueByPercentageComponent', () => {
  let component: IncreaseValueByPercentageComponent;
  let fixture: ComponentFixture<IncreaseValueByPercentageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseValueByPercentageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncreaseValueByPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
