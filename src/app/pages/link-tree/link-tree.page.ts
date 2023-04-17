import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-link-tree',
  templateUrl: './link-tree.page.html',
  styleUrls: ['./link-tree.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LinkTreePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
