import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeroComponent } from './hero/hero.component';
import {LogService} from "./services/log.service";
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
