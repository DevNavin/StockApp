import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IStock } from '../models/IStock';
import { SelectedStock } from '../models/SelectedStock';
import { Stock } from '../models/Stock';
import { StockData } from '../models/StockData';
import { StockListModel } from '../stock-list-model';

@Component({
  selector: 'app-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.css']
})
export class TrackStockComponent implements OnInit {

  arr: StockListModel[] = [];
  title(title: string) {
    throw new Error('Method not implemented.');
  }
  displayBox: string = '';
  getBox(box: string) {
    console.warn(box);
    this.displayBox = box;
  }
  stocks: IStock;
  selectedStocks: SelectedStock[number] = [];

  constructor(
    private stockService: ApiService,
    private router: Router,
    
    ) { }
  ngOnInit(): void {
    if (localStorage.getItem('stock')) {
      localStorage.removeItem('stock');
    }
  }
  inputValue = '';
  stockNames: StockData;
  stockDetails: Stock[] = [];
  getterStock() {
    if (!this.selectedStocks.includes(this.inputValue)) {
      this.selectedStocks.push(this.inputValue)
    }
    localStorage.setItem('stocks', JSON.stringify(this.selectedStocks));
    this.stockService.giveStock(this.inputValue).subscribe((data) => {
      this.stocks = data as IStock;
    });
    this.stockService.giveStockName(this.inputValue).subscribe((data1) => {
      this.stockNames = data1 as StockData;
        this.arr.push({
          stockName: this.stockNames.result[0].description,
          stockSymbol : this.stockNames.result[0].symbol,
          changeToday: this.stocks?.d,
          currentPrice: this.stocks?.c,
          openingPrice: this.stocks?.o,
          highest: this.stocks?.h,
        });
    });

  }

  navigateToSentimate(stockSymbol : string){
    this.router.navigateByUrl(`/sentiment/${stockSymbol}`)
  }

}
