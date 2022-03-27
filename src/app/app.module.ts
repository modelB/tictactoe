import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoxComponent } from './box/box.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoxComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
