import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    SearchComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxBootstrapSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
