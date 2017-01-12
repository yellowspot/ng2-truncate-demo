import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TRUNCATE_PIPES } from 'ng2-truncate';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TRUNCATE_PIPES],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
