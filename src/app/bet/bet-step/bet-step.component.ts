import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BetSelection } from 'src/app/Models/bet-selection';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-bet-step',
  templateUrl: './bet-step.component.html',
  styleUrls: ['./bet-step.component.scss']
})
export class BetStepComponent implements OnInit {
  enterStake = new FormControl('', [
    Validators.required,
    this.customValidator.StakeValidator.bind(this.customValidator)
  ]);

  betSelection: BetSelection;
  estWinnings: number;
  @Output() getStakeEvent = new EventEmitter<number>();
  @Input() stake: number;
  constructor(
    private customValidator: CustomvalidationService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.messageSource.subscribe((message) => {
      this.betSelection = message;
    });
    if (this.stake) {
      this.enterStake.setValue(this.stake.toString());
    }
  }

  getStakeValue(event: any) {
    this.getStakeEvent.emit(event.target.value);
    this.estWinnings = this.betSelection.BetOdds * event.target.value;
  }
}
