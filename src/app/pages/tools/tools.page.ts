import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule]
})
export class ToolsPage implements OnInit {

  title: string = 'Ferramentas';

  constructor() { }

  ngOnInit() {
  }

}
