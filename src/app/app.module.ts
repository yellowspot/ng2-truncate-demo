import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
