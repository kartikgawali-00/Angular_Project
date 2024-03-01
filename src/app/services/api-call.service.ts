import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient) { }

  getAllMatches(){
    return this.httpClient.get(`${environment.apiUrl}/cricket`)
   }
  getLiveScore(){
    return this.httpClient.get(`${environment.apiUrl}/cricket/live`)
   }
   getPointTable(){
    return this.httpClient.get(`${environment.apiUrl}/cricket/point-table`)
   }
}
