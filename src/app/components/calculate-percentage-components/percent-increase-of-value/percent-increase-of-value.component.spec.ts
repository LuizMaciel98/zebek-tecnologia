import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PercentIncreaseOfValueComponent } from './percent-increase-of-value.component';

describe('PercentIncreaseOfValueComponent', () => {
  let component: PercentIncreaseOfValueComponent;
  let fixture: ComponentFixture<PercentIncreaseOfValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentIncreaseOfValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PercentIncreaseOfValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
