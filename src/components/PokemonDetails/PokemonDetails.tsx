import React, {useEffect} from 'react';
import {usePokemonDetails} from '../../hooks/pokemon/usePokemonDetails';
import {pokemonDetailsContainer} from './PokemonDetails.style';
import {Alert, AlertDescription, AlertIcon, Spinner} from '@chakra-ui/core';
import {PokemonDescription} from './PokemonDescription';
import {usePokemonDetailsRoute} from "../../hooks/route/usePokemonDetailsRoute";

export const PokemonDetails: React.FC = () => {
    const {fetchPokemonDetails, pokemon, isFetching, isError} = usePokemonDetails();
    const {params: {pokemonId}} = usePokemonDetailsRoute();

    useEffect(() => {
        fetchPokemonDetails(pokemonId as string);
    }, [fetchPokemonDetails, pokemonId]);

    return (
        <div className={pokemonDetailsContainer}>
            {isFetching && <Spinner size={'xl'} />}
            {isError && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching error for Pokemon details</AlertDescription>
                </Alert>
            )}
            {pokemon && <PokemonDescription pokemon={pokemon} />}
        </div>
    );
};
