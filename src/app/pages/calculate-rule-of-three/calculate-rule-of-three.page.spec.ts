import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculateRuleOfThreePage } from './calculate-rule-of-three.page';

describe('CalculateRuleOfThreePage', () => {
  let component: CalculateRuleOfThreePage;
  let fixture: ComponentFixture<CalculateRuleOfThreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalculateRuleOfThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
