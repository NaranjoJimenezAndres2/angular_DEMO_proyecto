import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  url = 'http://localhost:8000'; //django local
  //url='https://app-django-primera.herokuapp.com'; //django heroku

  url2= 'https://5fc9f2333c1c22001644152b.mockapi.io/api/heroresapi'; //node (rest api heroes)

  constructor(private http: HttpClient) {}

    getDjango(): Observable<any> {
      return this.http.get(this.url + '/article');
    }

    getHeroes(): Observable<any> {
      return this.http.get(this.url2);
    }

    /*getMapa(id: number): Observable<any> {
      return this.http.get(this.url + '/map/' + id, { responseType: 'blob' });
    }*/
    getMapa(id:number): Observable<any> {
      return this.http.get(this.url + '/map/' + id, { responseType: 'blob' });
    }

    getComparacion(year: number, piloto1: string, piloto2: string): Observable<any> {
      return this.http.get(this.url + '/comparacion/' + year + '/' + piloto1 + '/' + piloto2, { responseType: 'blob' });
    }

    djangoComparacion(year: number, piloto1: string, piloto2: string): Observable<any> {
      return this.http.get(this.url + '/comparaciones/' + year + '/' + piloto1 + '/' + piloto2, { responseType: 'blob' });
    }

    getResultado(): Observable<any> {
      return this.http.get(this.url + '/resultado');
    }


   }
  

