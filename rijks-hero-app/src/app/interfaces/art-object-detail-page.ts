import { AdlibOverrides } from "./adlib-overrides";

export interface ArtObjectDetailPage {
    id: string
    similarPages: any[]
    lang: string
    objectNumber: string
    tags: any[]
    plaqueDescription: string
    audioFile1: any
    audioFileLabel1: any
    audioFileLabel2: any
    createdOn: string
    updatedOn: string
    adlibOverrides: AdlibOverrides
}
