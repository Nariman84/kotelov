import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  // exchange rates from API - https://exchangeratesapi.io/

  getExchangeRates(baseCurrency): Observable<any> {
    const apiUrl = `https://api.exchangeratesapi.io/latest?base=${baseCurrency}`;
    return this.httpClient.get(apiUrl);
  }
}
