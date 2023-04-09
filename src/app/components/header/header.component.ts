import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  dropdown = false;

  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef | any;

  constructor(private router: Router,) { }

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
    this.router.navigate(['/home']);
  }
  
  goToAboutPage() {
    this.router.navigate(['/about']);
  }
  
  goToToolsPage() {
    // this.router.navigate(['/Tools']);
  }
}