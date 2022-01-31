import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArtObject } from '../interfaces/art-object';
import { ArtObjectService } from '../services/art-object.service';


@Component({
  selector: 'app-art-objects',
  templateUrl: './art-objects.component.html',
  styleUrls: ['./art-objects.component.css']
})


export class ArtObjectsComponent implements OnInit {

  artObjects: ArtObject[] = [];

  constructor(private cdRef: ChangeDetectorRef, private artObjectService: ArtObjectService) {
  }

  onGetArtObjects(searchString: string): void {
    console.log('searching for:'+ searchString)
    this.artObjectService.getArtObjects(searchString)
      .subscribe(returnRoot => {
        this.artObjects = returnRoot.artObjects;
        console.log(this.artObjects);
        this.cdRef.detectChanges();
      });
  }

  ngOnInit(): void {
    this.onGetArtObjects('rembrandt');
  }

}


