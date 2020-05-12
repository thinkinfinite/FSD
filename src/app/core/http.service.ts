import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SbaResponse } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly apiBasePath = environment.apiBasePath;
  private token: string;

  constructor(private http: HttpClient) {
    const savedToken = localStorage.getItem('sba-token');
    if (savedToken) {
      this.token = savedToken as string;
    }
  }

  async auth(userName: string, password: string, keepLogin: boolean): Promise<boolean> {
    const response = await this.http.post<SbaResponse>(
      `${this.apiBasePath}/auth/authenticate`,
      {userName, password}, {}
    ).toPromise();
    if (response.status !== 0) {
      return false;
    } else {
      this.token = response.data as string;
      if (keepLogin === true) {
        localStorage.setItem('token', this.token);
      }
      return true;
    }
  }

  async get(url: string): Promise<any> {
    return await this.http.get<any>(`${this.apiBasePath}/${url}`,
      {headers: {Authorization: 'Bearer ' + this.token}}
    ).toPromise();
  }

  async post(url: string, data?: any): Promise<any> {
    return await this.http.post<any>(`${this.apiBasePath}/${url}`, data,
      {headers: {Authorization: 'Bearer ' + this.token}}
    ).toPromise();
  }

  async delete(url: string): Promise<any> {
    return await this.http.delete<any>(`${this.apiBasePath}/${url}`,
      {headers: {Authorization: 'Bearer ' + this.token}}
    ).toPromise();
  }

}
