import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SeachCardListComponent } from './seach-card-list/seach-card-list.component';
import { SeachBarComponent } from './seach-bar/seach-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SeachCardListComponent,
    SeachBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
