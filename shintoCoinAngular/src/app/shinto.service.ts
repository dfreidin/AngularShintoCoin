import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  owned_coins = 0;
  coin_value = 1;
  transactions = [];  // [{id: number, action: string, amount: number, value: number}]
  fib = [0, 1];
  used_ids = {};
  constructor() {
    this.setupFib();
  }
  setupFib() {
    for(let i=2; i<20; i++) {
      this.fib.push(this.fib[i-1] + this.fib[i-2]);
    }
  }
  getRandomID() {
    let id = Math.ceil(Math.random() * 9999);
    while(this.used_ids[id]) {
      id = Math.ceil(Math.random() * 9999);
    }
    this.used_ids[id] = true;
    return id;
  }
  mineCoin(fib_idx, fib_val) {
    if(this.fib[fib_idx] == fib_val) {
      this.owned_coins++;
      this.coin_value++;
      this.transactions.push({id: this.getRandomID(), action: "Mined", amount: 1, value: this.coin_value});
      return true;
    }
    else {
      return false;
    }
  }
  buyCoins(amt) {
    this.owned_coins += amt;
    this.coin_value += amt;
    this.transactions.push({id: this.getRandomID(), action: "Bought", amount: amt, value: this.coin_value});
    return true;
  }
  sellCoins(amt) {
    if(amt <= this.owned_coins) {
      this.owned_coins -= amt;
      this.coin_value -= amt;
      this.transactions.push({id: this.getRandomID(), action: "Sold", amount: amt, value: this.coin_value});
      return true;
    }
    else {
      return false;
    }
  }
  getCurrentCoins() {
    return {coins: this.owned_coins, value: this.coin_value};
  }
  getFullLedger() {
    return this.transactions;
  }
  getLedgerDetails(id: number) {
    for(let i=0; i<this.transactions.length; i++) {
      if(this.transactions[i].id == id) {
        return this.transactions[i];
      }
    }
    return false;
  }
}
