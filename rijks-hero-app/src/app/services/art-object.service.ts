import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { RootArtObjects } from '../interfaces/root-art-objects';
import { RootArtObject } from '../interfaces/root-art-object';


@Injectable({
  providedIn: 'root'
})

export class ArtObjectService {

  apiKey:string = 'lFy1FNRx'
  searchString: string = ''

  getArtObjects(): Observable<RootArtObjects> {
    return this.http.get<RootArtObjects>(`https://www.rijksmuseum.nl/api/nl/collection?key=${this.apiKey}&involvedMaker=Rembrandt+van+Rijn`)
      .pipe(
        tap(_ => this.log('fetched objects data')),
        catchError(this.handleError<RootArtObjects>('getArtObjects', undefined))
      );
  }

  getArtObject(id:string): Observable<RootArtObject> {
    return this.http.get<RootArtObject>(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${this.apiKey}`)
      .pipe(
        tap(_ => this.log(`fetched ${id} object data`)),
        catchError(this.handleError<RootArtObject>('getArtObjects', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtObjectService: ${message}`);
  }
}
