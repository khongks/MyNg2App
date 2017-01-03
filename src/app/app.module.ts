import { SharedService } from './../services/shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WeatherComponent } from './weather/weather.component';
import { MenuComponent } from './menu/menu.component';
import { CurrencyComponent } from './currency/currency.component';
import { CONST_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WeatherComponent,
    MenuComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [ SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
