import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DieRollerComponent } from './die-roller/die-roller.component';
import { RollHistoryComponent } from './roll-history/roll-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DieRollerComponent,
    RollHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
