import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpService: HttpService,
  ) {
  }

  public async login(userName: string, password: string, keepLogin: boolean) {
    return await this.httpService.auth(userName, password, keepLogin);
  }

}
