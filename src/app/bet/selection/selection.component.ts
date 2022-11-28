import { Component, OnInit } from '@angular/core';
import { BetSelection } from 'src/app/Models/bet-selection';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  betSelection: BetSelection;
  betOdds: number;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.messageSource.subscribe((message) => {
      this.betSelection = message
    });
  }

  getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
  }
}
