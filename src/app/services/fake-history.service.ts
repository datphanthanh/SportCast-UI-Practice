import { Injectable } from '@angular/core';
import { HistoryModel } from '../Models/history-model';

@Injectable({
  providedIn: 'root'
})
export class FakeHistoryService {
  histories : Array<HistoryModel> = [];
  constructor() {
    for (let index = 1; index <= 50; index++) {
      const element = new HistoryModel (`Match ${index}`, `SlipId: ${index}`, `Description ${index}`);
      this.histories.push(element);
    }
   }

  getHistories(pageIndex:number, pageSize: number) {
    return this.histories.slice(
			(pageIndex - 1) * pageSize,
			(pageIndex - 1) * pageSize + pageSize,
		);;
  }

}
