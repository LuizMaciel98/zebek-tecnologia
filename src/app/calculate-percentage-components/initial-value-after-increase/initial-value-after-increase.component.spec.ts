import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialValueAfterIncreaseComponent } from './initial-value-after-increase.component';

describe('InitialValueAfterIncreaseComponent', () => {
  let component: InitialValueAfterIncreaseComponent;
  let fixture: ComponentFixture<InitialValueAfterIncreaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialValueAfterIncreaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialValueAfterIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
