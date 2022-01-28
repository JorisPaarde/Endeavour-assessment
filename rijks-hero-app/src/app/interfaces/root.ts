import { ArtObject } from "./art-object";
import { CountFacets } from "./countfacets";
import { Facet } from "./facet";

export interface Root {
    elapsedMilliseconds: number
    count: number
    countFacets: CountFacets
    artObjects: ArtObject[]
    facets: Facet[]
  }
  