import { Injectable } from '@angular/core';
import { ArtObject } from './art-object';
import { ART_OBJECTS } from './mock-art-objects';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ArtObjectService {

  getArtObjects(): Observable<ArtObject[]> {
    const artObjects =  of(ART_OBJECTS);
    this.messageService.add("ArtObjectService: fetched ArtObjects");
    return artObjects;
  }

  constructor(private messageService: MessageService) { }
}
