import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ChannelComponent } from './channel/channel.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ChannelComponent,
    BreakdownComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
