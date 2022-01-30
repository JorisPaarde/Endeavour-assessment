import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtObjectService } from '../services/art-object.service';
import { ArtObjectDetail } from '../interfaces/art-object-detail';
import { RootArtObject } from '../interfaces/root-art-object';

@Component({
  selector: 'app-art-object-detail',
  templateUrl: './art-object-detail.component.html',
  styleUrls: ['./art-object-detail.component.css']
})
export class ArtObjectDetailComponent implements OnInit {

  rootArtObject: RootArtObject | undefined;
  artObject: ArtObjectDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private artObjectService: ArtObjectService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.onGetArtObject();
  }

  onGetArtObject(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.artObjectService.getArtObject(id)
      .subscribe(rootArtObject => {
      this.rootArtObject = rootArtObject
      this.artObject = rootArtObject.artObject});
  }

  goBack(): void {
    this.location.back();
  }

}
