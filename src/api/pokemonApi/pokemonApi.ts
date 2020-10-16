import {pokemonApi, pokemonApiList} from '../../helpers/constants';
import {axios} from '../rest/axios';

export const getPokemonList = () => {
    return axios.get(`${pokemonApi}${pokemonApiList}`);
};

export const getPokemonDetails = (pokemonId: string) => {
    return axios.get(`${pokemonApi}${pokemonApiList}${pokemonId}`);
};
