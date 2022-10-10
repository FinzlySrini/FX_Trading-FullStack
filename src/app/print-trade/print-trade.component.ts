import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-print-trade',
  templateUrl: './print-trade.component.html',
  styleUrls: ['./print-trade.component.css']
})
export class PrintTradeComponent implements OnInit {

  p:number=1;
  TradeData:any={};

  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.GetTrade();
  }

  GetTrade(){
    this.service.getTrades().subscribe((response:any)=>{
      this.TradeData=response;
    })
  }

  onBack(){
    this.router.navigate(["/home"])
  }


}
