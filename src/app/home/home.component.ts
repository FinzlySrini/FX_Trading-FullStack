import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.onBook();
  }

  onBook(){
  this.router.navigate(['/bookTrade']);
  }
  onPrint(){
    this.router.navigate(['/printTrade'])
  }

  onExit(){
      if (confirm("𝐃𝐨 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐞𝐱𝐢𝐭?") == true) {
        this.router.navigate(['/welcome'])
      }
  }

}
