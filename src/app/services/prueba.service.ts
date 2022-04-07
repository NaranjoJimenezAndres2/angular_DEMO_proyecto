import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  url = 'http://localhost:8000'; //django

  url2= 'https://5fc9f2333c1c22001644152b.mockapi.io/api/heroresapi'; //node

  constructor(private http: HttpClient) {}

    getDjango(): Observable<any> {
      return this.http.get(this.url + '/article');
    }

    getHeroes(): Observable<any> {
      return this.http.get(this.url2);
    }


   }
  

