import { Component, OnInit } from '@angular/core';
import { ArtObject } from '../interfaces/art-object';
import { ArtObjectService } from '../services/art-object.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  artObjects: ArtObject[] = [];

  constructor(private artObjectService: ArtObjectService) { }

  ngOnInit(): void {
    // this.getArtObjects();
  }

  // getArtObjects(): void {
  //   this.artObjectService.getArtObjects()
  //     .subscribe(artObjects => this.artObjects = artObjects.slice(1, 5))
  // }
}