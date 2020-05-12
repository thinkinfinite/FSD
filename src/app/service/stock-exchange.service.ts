import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { StockExchange } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  constructor(
    private httpService: HttpService,
  ) {
  }

  async getStockExchangeList(): Promise<StockExchange[]> {
    const res = await this.httpService.get(`stock/stockExchanges`);
    return res as StockExchange[];
  }

  async getStockExchange(id: number): Promise<StockExchange> {
    const res = await this.httpService.get(`stock/stockExchanges/${id}`);
    return res as StockExchange;
  }

  async saveStockExchange(item: StockExchange): Promise<StockExchange> {
    const res = await this.httpService.post(`stock/stockExchanges`, item);
    return res as StockExchange;
  }

  async deleteStockExchange(id: number) {
    await this.httpService.delete(`stock/stockExchanges/${id}`);
  }

}
