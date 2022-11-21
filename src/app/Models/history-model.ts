export class HistoryModel {
    Match: string;
    SlipId: string;
    Description: string;

    constructor(match: string, slipId: string, des: string) {
        this.Match = match;
        this.SlipId = slipId;
        this.Description = des;
    }
}
