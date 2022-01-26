import { Component, OnInit, Input } from '@angular/core';
import { ArtObject } from '../art-object';

@Component({
  selector: 'app-art-object-detail',
  templateUrl: './art-object-detail.component.html',
  styleUrls: ['./art-object-detail.component.css']
})
export class ArtObjectDetailComponent implements OnInit {

  @Input() artObject?: ArtObject;

  constructor() { }

  ngOnInit(): void {
  }

}
