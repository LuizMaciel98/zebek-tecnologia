import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PercentDecreaseOfValueComponent } from './percent-decrease-of-value.component';

describe('PercentDecreaseOfValueComponent', () => {
  let component: PercentDecreaseOfValueComponent;
  let fixture: ComponentFixture<PercentDecreaseOfValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentDecreaseOfValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PercentDecreaseOfValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
