import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BetSelection } from 'src/app/Models/bet-selection';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @ViewChild('bbWidget', { static: false }) bbWidget!: ElementRef;

  iFrameUrl: SafeResourceUrl;
  betSelections: BetSelection;
  fixtureForm: FormGroup;

  constructor(
    private sanitizer: DomSanitizer,
    private sharedService: SharedService,
    private fb: FormBuilder
    ) {
    /* this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://betbuildgbgen2-dev-branding.azurewebsites.net/markets?key=4affd365-52dd-404d-9b81-73ffe6ca768e&password=123&brand=gggreatoddsng&FixtureId=119888'); */
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://10.164.0.252:1337/markets?key=4affd365-52dd-404d-9b81-73ffe6ca768e&password=123&FixtureId=119888');
  }

  ngOnInit(): void {
    this.fixtureForm = this.fb.group({
      fixtureId: ['']
    })
  }

  ngAfterViewInit(): void {
    window.addEventListener("message", (event) => {
      if (event.origin == "http://localhost:4200")
        return;
      const dataObj = JSON.parse(event.data);
      this.betSelections = {
        Selections: dataObj.data.Description,
        BetOdds : Number((1 / dataObj.data.PriceDetails.Raw).toFixed(2))
      }
      this.sharedService.messageSource.next(this.betSelections);
    })
  }
  onSubmit() {
    const id = this.fixtureForm.get('fixtureId')?.value;
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://10.164.0.252:1337/markets?key=4affd365-52dd-404d-9b81-73ffe6ca768e&password=123&FixtureId=${id}`);
  }
}