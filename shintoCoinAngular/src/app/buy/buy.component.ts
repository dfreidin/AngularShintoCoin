import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  current_coins: any;
  amt_to_buy: number;

  constructor(private _shintoservice: ShintoService) { }

  ngOnInit() {
    this.getCurrentCoins();
    this.amt_to_buy = 0;
  }
  getCurrentCoins() {
    this.current_coins = this._shintoservice.getCurrentCoins();
  }
  buyCoins() {
    this._shintoservice.buyCoins(this.amt_to_buy);
    this.amt_to_buy = 0;
    this.getCurrentCoins();
  }

}
