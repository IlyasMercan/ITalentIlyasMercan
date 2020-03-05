import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {EventService} from './services/event.service';
import {XFactorComponent} from './components/x-factor/x-factor.component';
import { AboutComponent } from './components/about/about.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    XFactorComponent,
    AboutComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
