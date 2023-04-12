import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultCompoundInterestPage } from './result-compound-interest.page';

describe('ResultCompoundInterestPage', () => {
  let component: ResultCompoundInterestPage;
  let fixture: ComponentFixture<ResultCompoundInterestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResultCompoundInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
