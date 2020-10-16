import React from 'react';
import {Button} from '@chakra-ui/core';

interface DogListItemProps {
    src: string;
    onClick: (url: string) => void;
}

export const DogsListItem: React.FC<DogListItemProps> = ({src, onClick}) => {
    return (
        <tr>
            <td>
                <Button variant={'link'} onClick={() => onClick(src)}>
                    {src}
                </Button>
            </td>
        </tr>
    );
};
