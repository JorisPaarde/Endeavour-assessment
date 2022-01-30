import { ArtObjectDetail } from "./art-object-detail";
import { ArtObjectDetailPage } from "./art-object-detail-page";

export interface RootArtObject {
    elapsedMilliseconds: number
    artObject: ArtObjectDetail
    artObjectPage: ArtObjectDetailPage
}
