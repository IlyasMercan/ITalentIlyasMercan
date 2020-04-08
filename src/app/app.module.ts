import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {EventService} from './services/event.service';
import {XFactorComponent} from './components/x-factor/x-factor.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { NewLinePipe } from './pipes/new-line.pipe';
import { InteractiveXFactorComponent } from './components/interactive-x-factor/interactive-x-factor.component';
import { OverviewComponent } from './components/overview/overview.component';
import {MinimalEventService} from './services/min-event.service';
import { FinalReflectionComponent } from './components/final-reflection/final-reflection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    XFactorComponent,
    EventDetailComponent,
    NewLinePipe,
    InteractiveXFactorComponent,
    OverviewComponent,
    FinalReflectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EventService, MinimalEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
