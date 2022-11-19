import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  @Output() getStakeEvent = new EventEmitter<number>();
  @Input() stake : number;
  constructor(
    private customValidator: CustomvalidationService
  ) { }

  ngOnInit(): void {
    if (this.stake) {
      this.enterStake.setValue(this.stake.toString());
    }
  }

  getStakeValue(event: any) {
    this.getStakeEvent.emit(event.target.value);
}
}
