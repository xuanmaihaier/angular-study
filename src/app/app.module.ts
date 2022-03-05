import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './commons/news/news.component';
import { FormsModule } from '@angular/forms';
import { SonsComponent } from './commons/sons/sons.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
