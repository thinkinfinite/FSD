import { Injectable } from '@angular/core';
import { StockPrice } from 'src/app/service/shared.model';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpService: HttpService) { }

  async getStockPriceList(companyName: string, stockExchange: string, from: string, to: string): Promise<StockPrice[]> {
    const res = await this.httpService.get(`stockprice/list`);
    return res as StockPrice[];
  }
}
