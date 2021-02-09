import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {

  apiUrl: string;
  headers: HttpHeaders; 

  constructor(private http: HttpClient) { 

    this.apiUrl  = 'https://rickandmortyapi.com/api';
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');

  }

  /**
   * @description Get all characters 
   * @returns Returns an Observable with data response as JSON object. Returns an array object
   */
  getAll() {
    return this.http.get<{ info : any, results: any[] }>(`${this.apiUrl}/character`).toPromise();
  }

  /**
   * @description Get all characters 
   * @param {number} identifier. ID of current data to search
   * @returns Returns an Observable with data response as JSON object. Returns a single object
   */
  get(identifier : number) {

    return this.http.get(`${this.apiUrl}/character/${identifier}`).toPromise();
  }


  // Handle Errors and throw error as an Observable
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}