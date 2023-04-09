import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatePercentagePage } from './calculate-percentage.page';

describe('CalculatePercentagePage', () => {
  let component: CalculatePercentagePage;
  let fixture: ComponentFixture<CalculatePercentagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculatePercentagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
