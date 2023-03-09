import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, retry, throwError } from 'rxjs';
import { Symbol } from './models/Symbol';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public giveStock(symbol:string){
    const params = new HttpParams();
    params.set('symbol',symbol).set('token','bu4f8kn48v6uehqi3cqg');
   return this.httpClient.get('https://finnhub.io/api/v1/quote',{params: new HttpParams().set('symbol',symbol).set('token','bu4f8kn48v6uehqi3cqg')});
  }
   public giveStockName(symbolname:string){
    const params = new HttpParams();
    params.set('symbolname',symbolname).set('token','bu4f8kn48v6uehqi3cqg');
   return this.httpClient.get('https://finnhub.io/api/v1/search',{params: new HttpParams().set('q',symbolname).set('token','bu4f8kn48v6uehqi3cqg')});
  }
  //  public giveStockDetails(symboldetails?:any) {
  //   const params = new HttpParams();
  //   params.set('symboldetails',symboldetails).set('token','bu4f8kn48v6uehqi3cqg');
  //   return this.httpClient.get('https://finnhub.io/api/v1/stock/insider-sentiment?from=2015-01-01&to=2022-03-01'),{params:new HttpParams().set('d',symboldetails).set('token','bu4f8kn48v6uehqi3cqg')};
  //  }
   public giveStockDetails(symboldetails:Symbol) {
    // const params = new HttpParams();
    // params.set('symboldetails',symboldetails).set('token','bu4f8kn48v6uehqi3cqg');
    // return this.httpClient.get('https://finnhub.io/api/v1/stock/insider-sentiment'),{params:new HttpParams().set('d',symboldetails).set('token','bu4f8kn48v6uehqi3cqg')};


    let url = `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symboldetails.symbol}&from=${symboldetails.fromDate}&to=${symboldetails.toDate}&token=bu4f8kn48v6uehqi3cqg`
    return this.httpClient.get(url).pipe(
      map((response: any) => response),
      retry(1),
      catchError(this.handleError)
    );

  }

  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = 'Error ${error.error.message}';
    }else{
      errorMessage = 'Error Code ${error.status} \nMessage ${error.message}';
    }
    return throwError(errorMessage);
  }

}



