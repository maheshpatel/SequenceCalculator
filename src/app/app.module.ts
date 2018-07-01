import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SequenceCalculatorComponent } from './sequence-calculator/sequence-calculator.component';
import { SequenceCalculatorService } from './sequence-calculator/sequence-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    SequenceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SequenceCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
