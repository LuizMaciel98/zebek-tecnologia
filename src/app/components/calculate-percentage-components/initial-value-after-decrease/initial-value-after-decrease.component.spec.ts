import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialValueAfterDecreaseComponent } from './initial-value-after-decrease.component';

describe('InitialValueAfterDecreaseComponent', () => {
  let component: InitialValueAfterDecreaseComponent;
  let fixture: ComponentFixture<InitialValueAfterDecreaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialValueAfterDecreaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialValueAfterDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
