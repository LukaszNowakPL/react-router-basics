export interface PokemonListItemDto {
    name: string;
    url: string;
}

export interface PokemonDetailsDto {
    id: number;
    name: string;
    order: number;
    species: PokemonSpeciesDto;
    sprites: PokemonSpritesDto;
    weight: number;
}

interface PokemonSpeciesDto {
    name: string;
    url: string;
}

export interface PokemonSpritesDto {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}
