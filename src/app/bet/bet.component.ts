import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  step = 1;
  stake: number;
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.step < 3) {
      this.step += 1;
    }
    if (this.step == 3) {
      //call api submit here
    }
  }

  previous() {
    this.step -= 1;
  }

  getStakeValue(value: number) {
    if (value > 0) {
      this.stake = value;
    }
  }
}
