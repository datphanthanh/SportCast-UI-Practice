import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  step = 1;
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.step += 1;
  }

  previous() {
    this.step -= 1;
  }
}
