import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BetComponent } from './bet/bet.component';
import { SelectionComponent } from './bet/selection/selection.component';
import { IframeComponent } from './bet/selection/iframe/iframe.component';
import { BetStepComponent } from './bet/bet-step/bet-step.component';
import { SummaryComponent } from './bet/summary/summary.component';
import { InfoComponent } from './bet/summary/info/info.component';
import { BetHistoryComponent } from './bet-history/bet-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from '../app/Models/ngbd-sortable-header';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    BetComponent,
    SelectionComponent,
    IframeComponent,
    BetStepComponent,
    SummaryComponent,
    InfoComponent,
    BetHistoryComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
