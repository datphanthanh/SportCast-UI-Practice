import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  StakeValidator(stakeControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateStake(stakeControl.value)) {
          resolve({ stakeNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateStake(num: number) {
    return num <= 0;
  }
}