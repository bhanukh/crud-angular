import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  url="https://fakestoreapi.com/products/"

  constructor(private http:HttpClient) { }

  users(){
   return this.http.get('https://fakestoreapi.com/products');
  }
  delete(id:any): Observable<any>{
    return this.http.delete<any>(this.url+id)
  }
}
