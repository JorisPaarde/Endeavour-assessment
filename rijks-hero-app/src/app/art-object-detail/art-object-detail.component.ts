import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtObject } from '../interfaces/art-object';
import { ArtObjectService } from '../services/art-object.service';

@Component({
  selector: 'app-art-object-detail',
  templateUrl: './art-object-detail.component.html',
  styleUrls: ['./art-object-detail.component.css']
})
export class ArtObjectDetailComponent implements OnInit {

  artObject: ArtObject | undefined;

  constructor(
    private route: ActivatedRoute,
    private artObjectService: ArtObjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.getArtObject();
  }

  // getArtObject(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.artObjectService.getArtObject(id)
  //     .subscribe(artObject => this.artObject = artObject);
  // }

  goBack(): void {
    this.location.back();
  }

}
