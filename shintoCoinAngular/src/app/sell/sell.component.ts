import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  current_coins: any;
  amt_to_sell: number;

  constructor(private _shintoservice: ShintoService) { }

  ngOnInit() {
    this.getCurrentCoins();
    this.amt_to_sell = 0;
  }
  getCurrentCoins() {
    this.current_coins = this._shintoservice.getCurrentCoins();
  }
  sellCoins() {
    this._shintoservice.sellCoins(this.amt_to_sell);
    this.amt_to_sell = 0;
    this.getCurrentCoins();
  }

}
