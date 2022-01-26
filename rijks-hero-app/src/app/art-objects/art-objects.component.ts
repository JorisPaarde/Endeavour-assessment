import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../art-object';
import { ART_OBJECTS } from '../mock-art-objects';

@Component({
  selector: 'app-art-objects',
  templateUrl: './art-objects.component.html',
  styleUrls: ['./art-objects.component.css']
})


export class ArtObjectsComponent implements OnInit {

  artobjects = ART_OBJECTS;

  selectedArtObject?: ArtObject;

  onSelect(artObject: ArtObject): void {
    this.selectedArtObject = artObject;
  }

  constructor() { }

  ngOnInit(): void {
  }

}


