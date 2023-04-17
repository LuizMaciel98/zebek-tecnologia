import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkTreePage } from './link-tree.page';

describe('LinkTreePage', () => {
  let component: LinkTreePage;
  let fixture: ComponentFixture<LinkTreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinkTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
