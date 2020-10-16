/**
 * @jest-environment jsdom
 */
import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getPokemonDetails, getPokemonList} from '../../../src/api/pokemonApi/pokemonApi';
import {
    getPokemonDetailsResponseMock,
    getPokemonListResponseMock,
    pokemonDetailsMock,
    pokemonListMock,
} from '../../_helpers/api/pokemonApi.mocks';

jest.mock('../../../src/api/rest/axios');

describe('pokemonApi', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for pokemon list and passes response', async () => {
        mocked(axios.get).mockResolvedValue(getPokemonListResponseMock);
        const request = await getPokemonList();
        expect(request.data).toEqual({results: pokemonListMock});
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/');
    });

    it('calls request for pokemon details and passes response', async () => {
        mocked(axios.get).mockResolvedValue(getPokemonDetailsResponseMock);
        const request = await getPokemonDetails('3');
        expect(request.data).toEqual(pokemonDetailsMock);
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/3');
    });
});
