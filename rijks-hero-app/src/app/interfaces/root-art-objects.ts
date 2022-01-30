import { ArtObject } from "./art-object";
import { CountFacets } from "./countfacets";
import { Facet } from "./facet";

export interface RootArtObjects {
    elapsedMilliseconds: number;
    count: number;
    countFacets: CountFacets;
    artObjects: ArtObject[];
    facets: Facet[];
  }
  