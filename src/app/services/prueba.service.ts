import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  //url = 'http://localhost:8000'; //django local
  url='https://app-django-datavisualization.herokuapp.com'; //django heroku

  //url2= 'http://localhost:3000'; //node local
  url2= 'https://app-backend-nodej.herokuapp.com'; //node heroku

  constructor(private http: HttpClient) {}


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

    getResultado(year:string , nombreCircuito: string): Observable<any> {
      return this.http.get(this.url + '/resultado/' + year + '/' + nombreCircuito);
    }

    getResultadoDetalle(year: string,circuitName: string, driverId: string): Observable<any> {
      return this.http.get(this.url + '/carreraDetalle/'+ year + '/' + circuitName + '/' + driverId);
    }

    getPilotos(year:number): Observable<any> {
      return this.http.get(this.url + '/getPilotos/' + year);
    }

   getTelemetria (piloto1: string, piloto2: string, gp : string, year: string): Observable<any> {
    return this.http.get(this.url + '/telemetria/' + piloto1 + '/' + piloto2 + '/' + gp + '/' + year, { responseType: 'blob' });
  }

  getTelemetriaOnlyOne (piloto1: string, gp : string, year: string): Observable<any> {
    return this.http.get(this.url + '/telemetria/' + piloto1 + '/' + gp + '/' + year, { responseType: 'blob' });
  }

  getEstrategia (piloto1: string, gp : string, year: string): Observable<any>{
    return this.http.get(this.url + '/stints/' + piloto1 + '/' + gp + '/' + year);
  }


    //-----NODEJS

    addUser(user: any): Observable<any> {
      return this.http.post(this.url2 + '/user', user,  { responseType: 'text' });
    }

    login(email: string , password : string): Observable<any> {
      return this.http.post(this.url2 + '/loginUser' , { email, password }, { responseType: 'text' });

   }

   getCarrerasByYear(year: number): Observable<any> {
    return this.http.get(this.url2 + '/carreras/' + year);

  }

  getCapado (): Observable<any> {
    return this.http.get(this.url2 + '/capado');
  }

  getPitStops( year: number, gp: string, code: string) : Observable<any> {
    return this.http.get(this.url2 + '/boxes/' + year + '/' + gp + '/' + code);
  }

}
  

