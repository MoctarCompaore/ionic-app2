import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from '../models/user';
import { ResponseUserRegister } from '../models/ResponseUserRegister';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/utilisateur/inscription';

  constructor(private http: HttpClient) {}

  /* inscription(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, user, { headers });
  } */

  inscription(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        credentials: 'same-origin',
      }),
    };

    const body = new HttpParams()
       .set('firstname', user.firstname!)  
       .set('lastname', user.lastname!)
       .set('email',user.email!)
       .set('telephone', user.telephone!)
       .set('password', user.password!)
       .set('password_confirmation', user.password_confirmation!)
       ;
 

    return this.http
      .post<ResponseUserRegister>(this.apiUrl, body, httpOptions);

    /*  catchError(this.handleError<ResponseUserRegister>('Create user processed', {}))
       ); */
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
