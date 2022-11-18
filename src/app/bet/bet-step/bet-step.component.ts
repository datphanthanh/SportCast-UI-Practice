import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
@Component({
  selector: 'app-bet-step',
  templateUrl: './bet-step.component.html',
  styleUrls: ['./bet-step.component.scss']
})
export class BetStepComponent implements OnInit {
  enterStake = new FormControl('',[
    Validators.required,
    this.customValidator.StakeValidator.bind(this.customValidator)
  ]);

  constructor(
    private customValidator: CustomvalidationService
  ) { }

  ngOnInit(): void {
  }
}
