import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  betSelections: string[];
  betOdds: number;
  constructor() { }

  ngOnInit(): void {
    this.betSelections = ['Selection 1', 'Selection 2', 'Selection 3'];
    this.betOdds = this.getRandomFloat(0, 1, 2);
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }
}
