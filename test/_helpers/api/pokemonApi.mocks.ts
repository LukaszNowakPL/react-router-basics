import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {PokemonDetailsDto, PokemonListItemDto} from '../../../src/api/pokemonApi/pokemonDto';

interface Response<T> {
    response: T;
}

const responseMock: AxiosResponse = {
    data: {},
    status: 200,
    statusText: 'statusText',
    headers: 'headers',
    config: 'config' as AxiosRequestConfig,
    //@ts-ignore
    error: 'error',
    message: 'message',
};

const pokemonListItemMock: PokemonListItemDto = {
    name: 'mocked name',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
};

export const pokemonListMock: PokemonListItemDto[] = [pokemonListItemMock];

interface GetPokemonListResponse {
    results: PokemonListItemDto[];
}

export const pokemonDetailsMock: PokemonDetailsDto = {
    id: 1,
    name: 'mocked name',
    order: 1,
    species: {name: 'mocked species name', url: 'mocked species url'},
    sprites: {back_default: 'back_default_mock', front_default: 'front_default_mock'},
    weight: 100,
};

export const getPokemonListResponseMock: AxiosResponse<GetPokemonListResponse> = {
    ...responseMock,
    data: {results: pokemonListMock},
};

export const getPokemonListResponse400Mock: Response<AxiosResponse<{}>> = {
    response: {
        ...responseMock,
        status: 400,
    },
};

export const getPokemonDetailsResponseMock: AxiosResponse<PokemonDetailsDto> = {
    ...responseMock,
    data: pokemonDetailsMock,
};
