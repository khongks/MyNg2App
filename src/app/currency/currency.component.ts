import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {
  id_currency: string = '';
  my_result: any;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callCurrencyService() {
    this._sharedService.getCurrrencyExchangeRate(this.id_currency.toUpperCase())
      .subscribe(
        lstresult => {
          this.my_result = JSON.stringify(lstresult);
        },
        error => {
          console.log('Error. The callCurrencyService result JSON value is as follows:');
          console.log(error);
        }
      );
  }

}
