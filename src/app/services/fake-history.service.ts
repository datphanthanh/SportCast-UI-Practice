import { Injectable } from '@angular/core';
import { HistoryModel } from '../Models/history-model';

@Injectable({
  providedIn: 'root'
})
export class FakeHistoryService {
  histories : Array<HistoryModel> = [];
  constructor() {
    for (let index = 1; index <= 100; index++) {
      const element = new HistoryModel (`Match ${index}`, `SlipId: ${index}`, `Description ${index}`);
      this.histories.push(element);
    }
   }

  getHistories(page:number, pageSize: number) {
    return this.histories.slice(
			(page - 1) * pageSize,
			(page - 1) * pageSize + pageSize,
		);;
  }

}
