import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';
import truckerData from '../../../assets/trucker-data.json';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  imports: [
    TegelModule, CommonModule
  ]
})
export default class AboutPageComponent implements OnInit {
  tableRows = truckerData;

  constructor() { }

  ngOnInit(): void {
  }

}
