import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  step = 1;
  stake: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  next() {
    if (this.step < 3) {
      this.step += 1;
    } else {
      this.router.navigate(['/history'], { relativeTo: this.route });
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
