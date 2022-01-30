import { Acquisition } from "./acquisition";
import { Classification } from "./classification";
import { Color } from "./color";
import { ColorsWithNormalization } from "./colors-with-normalization";
import { Dating } from "./dating";
import { Dimension } from "./dimension";
import { Label } from "./label";
import { LinksDetail } from "./links-detail";
import { Normalized32Color } from "./normalized-32-color";
import { NormalizedColor } from "./normalized-colors";
import { PrincipalMaker } from "./principal-maker";
import { WebImage } from "./webimage";

export interface ArtObjectDetail {
    linksDetailr: LinksDetail
    id: string
    priref: string
    objectNumber: string
    language: string
    title: string
    copyrightHolder: any
    webImage: WebImage
    colors: Color[]
    colorsWithNormalization: ColorsWithNormalization[]
    normalizedColors: NormalizedColor[]
    normalized32Colors: Normalized32Color[]
    titles: string[]
    description: string
    labelText: any
    objectTypes: string[]
    objectCollection: string[]
    makers: any[]
    principalMakers: PrincipalMaker[]
    plaqueDescriptionDutch: string
    plaqueDescriptionEnglish: string
    principalMaker: string
    artistRole: any
    associations: any[]
    acquisition: Acquisition
    exhibitions: any[]
    materials: string[]
    techniques: any[]
    productionPlaces: string[]
    dating: Dating
    classification: Classification
    hasImage: boolean
    historicalPersons: string[]
    inscriptions: any[]
    documentation: string[]
    catRefRPK: any[]
    principalOrFirstMaker: string
    dimensions: Dimension[]
    physicalProperties: any[]
    physicalMedium: string
    longTitle: string
    subTitle: string
    scLabelLine: string
    label: Label
    showImage: boolean
    location: string
}
