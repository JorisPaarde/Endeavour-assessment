import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../art-object';
import { ArtObjectService } from '../art-object.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-art-objects',
  templateUrl: './art-objects.component.html',
  styleUrls: ['./art-objects.component.css']
})


export class ArtObjectsComponent implements OnInit {

  artObjects: ArtObject[] = [];

  selectedArtObject?: ArtObject;

  constructor(private artObjectService: ArtObjectService, private messageService: MessageService) {
  }

  getArtObjects(): void {
    this.artObjectService.getArtObjects()
      .subscribe(artObjects => this.artObjects = artObjects)
  }

  onSelect(artObject: ArtObject): void {
    this.selectedArtObject = artObject;
    this.messageService.add(`HeroesComponent: Selected hero id=${artObject.id}`);
  }

  ngOnInit(): void {
    this.getArtObjects();
  }

}


