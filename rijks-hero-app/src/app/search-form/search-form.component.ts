import { Component, NgModule, OnInit } from '@angular/core';
import { ArtObjectsComponent } from '../art-objects/art-objects.component';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  log(x: any) {
    console.log(x);
  }

  search(searchString: string){
    console.log(typeof(searchString))
    this.artObjectsComponent.onGetArtObjects(searchString)}

  constructor(private artObjectsComponent: ArtObjectsComponent) { }

  ngOnInit(): void {
  }

}
