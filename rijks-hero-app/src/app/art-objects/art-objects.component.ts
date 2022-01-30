import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../interfaces/art-object';
import { ArtObjectService } from '../services/art-object.service';


@Component({
  selector: 'app-art-objects',
  templateUrl: './art-objects.component.html',
  styleUrls: ['./art-objects.component.css']
})


export class ArtObjectsComponent implements OnInit {

  artObjects: ArtObject[] = [];

  constructor(private artObjectService: ArtObjectService) {
  }

  onGetArtObjects(searchString: string): void {
    this.artObjectService.getArtObjects(searchString)
      .subscribe(returnRoot => this.artObjects = returnRoot.artObjects)
  }

  ngOnInit(): void {
    this.onGetArtObjects('rembrand');
  }

}


