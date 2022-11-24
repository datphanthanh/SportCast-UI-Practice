import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @ViewChild('bbWidget', { static: false }) bbWidget!: ElementRef;
  betslip: any;
  iFrameUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://betbuildgbgen2-dev-branding.azurewebsites.net/markets?key=4affd365-52dd-404d-9b81-73ffe6ca768e&password=123&brand=gggreatoddsng&FixtureId=203962');
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    window.addEventListener("message", (event) => {
      if (event.origin == "http://localhost:4200")
        return;
      console.log("==== RECEIVE MESSAGE")
      console.log(event);
      const dataObj = JSON.parse(event.data);
      this.betslip = dataObj.data;
      console.log(this.betslip);
    })
  }
}