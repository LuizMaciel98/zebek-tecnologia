import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecreaseValueByPercentageComponent } from './decrease-value-by-percentage.component';

describe('DecreaseValueByPercentageComponent', () => {
  let component: DecreaseValueByPercentageComponent;
  let fixture: ComponentFixture<DecreaseValueByPercentageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreaseValueByPercentageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecreaseValueByPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
