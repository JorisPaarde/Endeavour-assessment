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

  // getArtObjects(): void {
  //   this.artObjectService.getArtObjects()
  //     .subscribe(artObjects => this.artObjects = artObjects)
  // }

  ngOnInit(): void {
    // this.getArtObjects();
  }

}


