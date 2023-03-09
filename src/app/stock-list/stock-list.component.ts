import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'my-app',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class stockListComponent implements OnInit {
  // Not used anywhere
  // stockList: any;
  // stockData: any;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    // Not used anywhere

    // this.apiService.giveStock().subscribe((data)=>{
    //   this.stockList = data;
    // });
    // this.apiService.giveStockName().subscribe((data1)=>{
    //   this.stockList=data1;
    // });

  }
}

