import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: number;
  details: any;
  private sub: any;

  constructor(
    private _shintoservice: ShintoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.getDetails();
    });
  }

  getDetails() {
    this.details = this._shintoservice.getLedgerDetails(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
