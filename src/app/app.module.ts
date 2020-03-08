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
import {HttpClientModule} from '@angular/common/http';
import { NewLinePipe } from './pipes/new-line.pipe';
import { InteractiveXFactorComponent } from './components/interactive-x-factor/interactive-x-factor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    XFactorComponent,
    AboutComponent,
    EventDetailComponent,
    NewLinePipe,
    InteractiveXFactorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
