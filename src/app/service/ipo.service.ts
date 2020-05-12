import { Injectable } from '@angular/core';
import { Ipo } from './shared.model';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  constructor(private httpService: HttpService) { }

  async getIpoList(): Promise<Ipo[]> {
    const res = await this.httpService.get(`ipo/list`);
    return res as Ipo[];
  }

  async saveIpoDetail(item: Ipo): Promise<Ipo> {
    const res = await this.httpService.post(`ipo/save`, item);
    return res as Ipo;
  }
}
