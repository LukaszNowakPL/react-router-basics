import React from 'react';
import {PokemonDetailsPicture} from './PokemonDetailsPicture';
import {getPictureUrls} from './PokemonDetails.helpers';
import {pokemonName} from './PokemonDetails.style';
import {Heading, Stack} from '@chakra-ui/core';
import {PokemonDetailsDto} from '../../api/pokemonApi/pokemonDto';

interface PokemonDescriptionProps {
    pokemon: PokemonDetailsDto;
}

export const PokemonDescription: React.FC<PokemonDescriptionProps> = ({pokemon: {name, species, id, weight, sprites}}) => {
    const pictureUrls = getPictureUrls(sprites);
    return (
        <>
            <Heading as={'h2'} className={pokemonName}>
                {name}
            </Heading>
            <p>
                <strong>species</strong>: {species.name}
            </p>
            <p>
                <strong>id</strong>: {id}
            </p>
            <p>
                <strong>weight</strong>: {weight}
            </p>
            <div>
                <strong>pictures</strong>:{' '}
                <Stack isInline>
                    {pictureUrls.map(url => (
                        <PokemonDetailsPicture key={url} src={url} />
                    ))}
                </Stack>
            </div>
        </>
    );
};
