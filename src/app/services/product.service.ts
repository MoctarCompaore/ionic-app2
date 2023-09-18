import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduct } from '../models/TProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduits(): Observable<TProduct> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'credentials': 'same-origin'
      })
   };
    return this.http.get<TProduct>('http://localhost:8000/api/produits/', httpOptions);

  }

  getProduit(id:number): Observable<TProduct> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'credentials': 'same-origin'
      })
   };
    return this.http.get<TProduct>('http://localhost:8000/api/produit/'+id, httpOptions);
  }

}
