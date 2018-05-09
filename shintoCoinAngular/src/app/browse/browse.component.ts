import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledger = [];

  constructor(private _shintoservice: ShintoService) { }

  ngOnInit() {
    this.getLedger();
  }
  getLedger() {
    this.ledger = this._shintoservice.getFullLedger();
  }

}
