import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-book-trade',
  templateUrl: './book-trade.component.html',
  styleUrls: ['./book-trade.component.css']
})
export class BookTradeComponent implements OnInit {
amt:string='';
name:string='';
ratemsg:string='';
responsemsg:string='';
allcurrencypair:any[]=[
  "USDINR"
]

  constructor(private router:Router,
              private service:HttpService) { }

  ngOnInit(): void {

  }
 
  


  onSubmit(f:NgForm){
 
    let obj={
      customerName:f.value.customername,
      currencyPair:f.value.currencypair,
      amount:f.value.amount,
      rate:66.00
    }

    this.service.bookTrade(obj)
    .subscribe((response)=>{
      console.log(response);
      this.responsemsg=response;
    })
    console.log(obj);
  }

  onBack(){
    this.router.navigate(["/home"])
  }

  onChange(myevent:any){
    console.log(myevent);
    console.log(myevent.target.checked);
    if(myevent.target.checked){
      this.amt=(<HTMLInputElement>document.getElementById("amount")).value;
      this.name=(<HTMLInputElement>document.getElementById("name")).value;
      //console.log((<HTMLInputElement>document.getElementById("currpair")).value)
      console.log((<HTMLInputElement>document.getElementById("amount")).value);
      console.log((<HTMLInputElement>document.getElementById("name")).value);
      this.ratemsg='You are tranferring INR '+(66.00*(+this.amt))+' to '+this.name;
    }
  }
  
}
  
