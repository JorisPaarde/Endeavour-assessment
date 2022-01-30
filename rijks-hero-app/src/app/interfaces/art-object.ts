import { HeaderImage } from "./headerimage";
import { Links } from "./links";
import { WebImage } from "./webimage";

export interface ArtObject {
  links: Links;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: WebImage;
  headerImage: HeaderImage;
  productionPlaces: string[];
}
