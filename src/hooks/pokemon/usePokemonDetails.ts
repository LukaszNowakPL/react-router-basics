import {useCallback, useState} from 'react';
import {getPokemonDetails} from '../../api/pokemonApi/pokemonApi';
import {PokemonDetailsDto} from '../../api/pokemonApi/pokemonDto';

export const usePokemonDetails = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<PokemonDetailsDto>();

    const fetchPokemonDetails = useCallback(async (pokemonId: string) => {
        setIsFetching(true);
        try {
            const pokemon = await getPokemonDetails(pokemonId);
            setPokemon(pokemon.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        pokemon,
        fetchPokemonDetails,
    };
};
