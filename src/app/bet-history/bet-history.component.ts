import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { SortColumn, SortDirection, SortEvent } from '../interfaces/sort-event';
import { HistoryModel } from '../Models/history-model';
import { NgbdSortableHeader } from '../Models/ngbd-sortable-header';
import { FakeHistoryService } from '../services/fake-history.service';

@Component({
  selector: 'app-bet-history',
  templateUrl: './bet-history.component.html',
  styleUrls: ['./bet-history.component.scss']
})

export class BetHistoryComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  public totalRecord = 50;
  public histories: Array<HistoryModel> = [];
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private historyService: FakeHistoryService
  ) { }

  ngOnInit(): void {
    this.histories = this.historyService.getHistories(1, this.pageSize);
  }

  getHistories() {
		this.histories = this.historyService.getHistories(this.page, this.pageSize);
	}

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.histories = this.histories;
    } else {
      this.histories = [...this.histories].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
}
