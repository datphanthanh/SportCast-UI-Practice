import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { 
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

}
