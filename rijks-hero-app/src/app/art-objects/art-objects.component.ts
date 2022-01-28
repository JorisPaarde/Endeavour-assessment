import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../art-object';
import { ArtObjectService } from '../art-object.service'

@Component({
  selector: 'app-art-objects',
  templateUrl: './art-objects.component.html',
  styleUrls: ['./art-objects.component.css']
})


export class ArtObjectsComponent implements OnInit {

  artObjects: ArtObject[] = [];

  getArtObjects(): void {
    this.artObjectService.getArtObjects()
    .subscribe(artObjects => this.artObjects = artObjects)
  }

  selectedArtObject?: ArtObject;

  onSelect(artObject: ArtObject): void {
    this.selectedArtObject = artObject;
  }

  constructor(private artObjectService: ArtObjectService) {
  }

  ngOnInit(): void {
    this.getArtObjects();
  }

}


