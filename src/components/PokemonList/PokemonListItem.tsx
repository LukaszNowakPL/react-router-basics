import {Button} from '@chakra-ui/core';
import React from 'react';
import {PokemonListItemDto} from '../../api/pokemonApi/pokemonDto';
import {pokemonName} from './PokemonList.style';
import {extractPokemonIdFromUrl} from "./PokemonList.helpers";
import {usePokemonDetailsRoute} from "../../hooks/route/usePokemonDetailsRoute";

interface PokemonListItemProps {
    pokemon: PokemonListItemDto;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({pokemon: {name, url}}) => {

    const {setPokemonDetailsRoute} = usePokemonDetailsRoute();

    const handleButtonClick = () => {
        const pokemonId = extractPokemonIdFromUrl(url);
        setPokemonDetailsRoute(pokemonId);
    };

    return (
        <tr>
            <td className={pokemonName}>{name}</td>
            <td>
                <Button colorScheme={'green'} size={'sm'} onClick={handleButtonClick}>
                    Details
                </Button>
            </td>
        </tr>
    );
};
