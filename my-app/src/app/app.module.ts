import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ProgressBarModule} from "angular-progress-bar"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GetallComponent } from './getall/getall.component';
import { NotFoundComponent }   from './404/404.component';
import { AcceptComponent }   from './accept/accept.component';
import { AcceptingComponent }   from './accepting/accepting.component';

import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { Page3Component } from './page3/page3.component';
registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    GetallComponent,
    NotFoundComponent,
    AcceptComponent,
    AcceptingComponent,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
    }),
    ProgressBarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
