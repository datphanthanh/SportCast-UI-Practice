import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BetSelection } from '../Models/bet-selection';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  messageSource: BehaviorSubject<BetSelection> = new BehaviorSubject(new BetSelection);
  
  constructor() { }
}
