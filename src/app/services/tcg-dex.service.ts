import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TcgDexService {
  private baseUrl = 'https://api.tcgdex.net/v2/en/random/card';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

 
}
