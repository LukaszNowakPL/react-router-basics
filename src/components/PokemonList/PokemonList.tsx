import React, {useEffect} from 'react';
import {usePokemonList} from '../../hooks/pokemon/usePokemonList';
import {PokemonListItem} from './PokemonListItem';
import {PokemonDetails} from '../PokemonDetails/PokemonDetails';
import {Text, Alert, AlertDescription, AlertIcon, Spinner} from '@chakra-ui/core';
import {selectPokemonLabel} from './PokemonList.style';
import {Route, Switch} from "react-router";
import {ROUTES} from '../../helpers/routes';

export const PokemonList: React.FC = () => {
    const {isFetching, fetchPokemonList, pokemonList, isError} = usePokemonList();

    useEffect(() => {
        fetchPokemonList();
    }, [fetchPokemonList]);

    if (isFetching) {
        return <Spinner size={'xl'} />;
    }

    if (isError) {
        return (
            <Alert status="error">
                <AlertIcon />
                <AlertDescription>Fetching error for Pokemon list</AlertDescription>
            </Alert>
        );
    }

    return (
        <>
            <Switch>
            <Route path={ROUTES.POKEMON_DETAILS}><PokemonDetails /></Route>
                <Route>
                    <Text fontSize={'lg'} className={selectPokemonLabel}>
                        Click button to see Pokemon's details.
                    </Text>
                </Route>
            </Switch>
            <table>
                <tbody>
                    {pokemonList.map(pokemonItem => (
                        <PokemonListItem key={pokemonItem.url} pokemon={pokemonItem} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
