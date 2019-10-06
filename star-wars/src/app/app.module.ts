import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './card/card.module';
import { MenuModule } from './menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from './paginator/paginator.module';
import { AutoCompleteModule } from './auto-complete/auto-complete.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      CardModule,
      MenuModule,
      HttpClientModule,
      PaginatorModule,
      AutoCompleteModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
