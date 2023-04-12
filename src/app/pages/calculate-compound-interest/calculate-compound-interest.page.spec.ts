import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculateCompoundInterestPage } from './calculate-compound-interest.page';

describe('CalculateCompoundInterestPage', () => {
  let component: CalculateCompoundInterestPage;
  let fixture: ComponentFixture<CalculateCompoundInterestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculateCompoundInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
