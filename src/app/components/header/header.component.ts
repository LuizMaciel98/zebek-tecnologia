import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonNavigationService } from '../../services/commonNavigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CommonNavigationService]
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  dropdown = false;

  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef | any;

  constructor(private router: Router, private commonNavigation: CommonNavigationService) { }

  ngOnInit() { }

  hideDropdown(event: any) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    console.log('hideDropdown');

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top+2;
    const leftBoundary = rect.left+2;
    const rightBoundary = rect.right-2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }

  goToHomePage() {
    this.commonNavigation.goToHomePage();
  }
  
  goToAboutPage() {
    this.commonNavigation.goToAboutPage();
  }
  
  goToToolsPage() {
    this.commonNavigation.goToToolsPage();
  }
}