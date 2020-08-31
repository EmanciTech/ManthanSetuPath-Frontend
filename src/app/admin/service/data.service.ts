import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { HttpErrorResponse } from  "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public server = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  public login(data: any): Observable < any > {
    return this.httpClient
      .post(this.server + '/login', data)
      .pipe(catchError(this.handleError));
  }

  public getDashboard(): Observable < any > {
    return this.httpClient
      .get(this.server + '/dashboard')
      .pipe(catchError(this.handleError));
  }

  public getCategory(collection): Observable < any > {
    return this.httpClient
      .get(this.server + '/category?collection=' + collection)
      .pipe(catchError(this.handleError));
  }

  public addCategory(data: any): Observable < any > {
    return this.httpClient
      .post(this.server + '/category/add', data)
      .pipe(catchError(this.handleError));
  }

  public updateCategory(data: any): Observable < any > {
    return this.httpClient
      .patch(this.server + '/category/update', data)
      .pipe(catchError(this.handleError));
  }

  public deleteCategory(data: any): Observable < any > {
    return this.httpClient
      .delete(this.server + '/category/delete?collection=' + data['collection']
      + '&id=' + data['id'] + '&category=' + data['category'])
      .pipe(catchError(this.handleError));
  }

  public getServices(collection): Observable < any > {
    return this.httpClient
      .get(this.server + '/service?collection=' + collection)
      .pipe(catchError(this.handleError));
  }

  public addServices(file: any, collection: any, category: any, service: any): Observable < any > {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('collection', collection);
    formData.append('category', category);
    formData.append('service', JSON.stringify(service));
    return this.httpClient
      .post(this.server + '/service/add', formData)
      .pipe(catchError(this.handleError));
  }

  public updateService(file: any, id: any, collection: any, category: any, service: any): Observable < any > {
    const formData = new FormData();
    formData.append('file', file ? file : []);
    formData.append('id', id);
    formData.append('collection', collection);
    formData.append('category', category);
    formData.append('service', JSON.stringify(service));
    return this.httpClient
      .post(this.server + '/service/update', formData)
      .pipe(catchError(this.handleError));
  }

  public deleteService(data: any): Observable < any > {
    return this.httpClient
      .delete(this.server + '/service/delete?collection=' + data['collection']
      + '&id=' + data['id'] + '&category=' + data['category'])
      .pipe(catchError(this.handleError));
  }

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
