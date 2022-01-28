import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ArtObject } from '../interfaces/art-object';


@Injectable({
  providedIn: 'root'
})

export class ArtObjectService {

  // getArtObjects(): Observable<ArtObject[]> {
  //   const artObjects =  of(ART_OBJECTS);
  //   this.messageService.add("ArtObjectService: fetched ArtObjects");
  //   return artObjects;
  // }
  getArtObjects(){
    this.http.get('https://www.rijksmuseum.nl/api/nl/collection?key=lFy1FNRx&involvedMaker=Rembrandt+van+Rijn').subscribe((response)=>(
      alert(JSON.stringify(response))
    ))
  }

  // getArtObject(id: number): Observable<ArtObject> {
  //   const artObject = ART_OBJECTS.find(h => h.id === id)!;
  //   this.messageService.add(`art-object-service: fetched hero id=${id}`);
  //   return of(artObject);
  // }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
      this.getArtObjects();
     }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtObjectService: ${message}`);
  }
}
