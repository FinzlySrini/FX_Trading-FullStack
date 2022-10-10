import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { ExitComponent } from './exit/exit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BookTradeComponent,
    ExitComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomepageComponent,
    PrintTradeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
