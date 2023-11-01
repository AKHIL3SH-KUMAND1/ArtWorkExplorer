export interface Pagination {
    total: number,
    limit: 10,
    offset: 0,
    total_pages: number,
    current_page: number,
    next_url: string
}

export interface Info {
    license_text: string,
    license_links: string[],
    version: string
}

export interface Config {
    iiif_url: string,
    website_url: string
}
export interface Thumbnail{
    lqip: string,
    width: number,
    height: number,
    alt_text: string
}
export interface Data {
    id: number,
    title: string,
    thumbnail: Thumbnail,
    date_display: string,
    place_of_origin: string,
    artist_id: number,
    artist_titles: string[],
    image_id: string,
    alt_image_ids: string[]
}

export interface DisplayData{
    id: number,
    title: string,
    thumbnail: Thumbnail,
    artist_display: string,
    description : string|null,
    publication_history : string|null,
    exhibition_history : string|null,
    category_titles : string[],
    place_of_origin: string,
    image_id: string,
    alt_image_ids: string[],
    inscriptions:string
}

export interface WishlistedData{
    id:number,
    title:string,
    image_id:string,
    artist_titles:string[]
}

export interface WishlistedArtwork{
    data:WishlistedData[],
    info:Info,
    config:Config
}
export interface Artwork {
    pagination: Pagination,
    data : Data[],
    info : Info,
    config : Config
}

export interface ArtworkDisplayData{
    data : DisplayData[],
    info : Info,
    config : Config
}