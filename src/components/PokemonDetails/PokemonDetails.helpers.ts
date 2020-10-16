import {PokemonSpritesDto} from '../../api/pokemonApi/pokemonDto';

export const getPictureUrls = (sprites: PokemonSpritesDto) => {
    return Object.keys(sprites)
        .filter(spriteKey => {
            return typeof sprites[spriteKey as keyof PokemonSpritesDto] === 'string';
        })
        .map(spriteKey => sprites[spriteKey as keyof PokemonSpritesDto]);
};
