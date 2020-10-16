import {Image} from '@chakra-ui/core';
import React from 'react';

interface PokemonDetailsPictureProps {
    src?: string;
}

export const PokemonDetailsPicture: React.FC<PokemonDetailsPictureProps> = ({src}) => {
    return src ? <Image src={src} alt={'Pokemon pic'} height={'96px'} /> : null;
};
