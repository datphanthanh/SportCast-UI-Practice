import { HistoryModel } from "../Models/history-model";

export type SortColumn = keyof HistoryModel | '';
export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
    column: SortColumn;
	direction: SortDirection;
}


