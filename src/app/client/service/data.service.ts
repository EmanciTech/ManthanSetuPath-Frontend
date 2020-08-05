import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }
  environmental = { collection: 'environmental' };
  Medical = {collection: 'medical'};
  construction = {collection: 'construction'}

  public getMenu(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/dashboard')
      .pipe(catchError(this.handleError));
  }

  public getMedicalCategory(): Observable<any> {
    return this.http.get(this.baseUrl + '/category',{params:this.Medical}).pipe(catchError(this.handleError));
  }

  public getEnvironmentalCategory(): Observable<any> {
    return this.http.get(this.baseUrl + '/category',{params:this.environmental}).pipe(catchError(this.handleError));
  }

  public getconstructionCategory(): Observable<any> {
    return this.http.get(this.baseUrl + '/category',{params:this.construction}).pipe(catchError(this.handleError));
  }


  // categoryList
  public getMedicalCategoryList(data): Observable<any> {
    return this.http.get(this.baseUrl + '/service/single',{params:data}).pipe(catchError(this.handleError));
  }

  public getEnvironmentalCategoryList(data): Observable<any> {
    return this.http.get(this.baseUrl + '/service/single',{params:data}).pipe(catchError(this.handleError));
  }

  public getconstructionCategoryList(data): Observable<any> {
    return this.http.get(this.baseUrl + '/service/single',{params:data}).pipe(catchError(this.handleError));
  }

  // throw error to component
  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side Error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
