import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  fib_idx: number;
  fib_ans: number;

  constructor(private _shintoservice: ShintoService) { }

  ngOnInit() {
    this.genRandomIdx();
    this.fib_ans = 0;
  }
  genRandomIdx() {
    this.fib_idx = Math.floor(Math.random() * 5) + 5;
  }
  mineCoin() {
    console.log("Mining a shintocoin");
    this._shintoservice.mineCoin(this.fib_idx, this.fib_ans);
    this.genRandomIdx();
    this.fib_ans = 0;
  }

}
