import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';
import truckerData from '../../../assets/trucker-data.json';

@Component({
  selector: 'app-test-page',
  standalone: true,
  templateUrl: './test-page.component.html',
  imports: [
    TegelModule, CommonModule
  ]
})
export default class TestPageComponent implements OnInit {
  tableRows = truckerData;

  constructor() { }

  ngOnInit(): void {
  }

}
