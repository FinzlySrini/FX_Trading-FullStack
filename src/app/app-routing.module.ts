import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { ExitComponent } from './exit/exit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:"",redirectTo:"welcome",pathMatch:'full'
  },
  {
    path:"welcome",component:WelcomepageComponent
  },
  {
    path:"bookTrade",component:BookTradeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"exit",component:ExitComponent
  },
 
  {
    path:"printTrade",component:PrintTradeComponent
  },
  {
    path:"**",component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
