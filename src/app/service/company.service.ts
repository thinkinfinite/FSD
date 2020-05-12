import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Company } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpService: HttpService,
  ) { }

  async getCompanyList(): Promise<Company[]> {
    const res = await this.httpService.get(`company/list`);
    return res as Company[];
  }
}
