import React, {useEffect, useState} from 'react';
import {Text, Image, Alert, AlertDescription, AlertIcon, Spinner} from '@chakra-ui/core';
import {useDogsList} from '../../hooks/dogs/useDogsList';
import {DogsListItem} from './DogsListItem';
import {dogPicture, selectDogLabel} from './DogsList.style';

export const DogsList: React.FC = () => {
    const [selectedDog, setSelectedDog] = useState<string>();
    const {isFetching, fetchDogsList, dogsList, isError} = useDogsList();

    useEffect(() => {
        fetchDogsList();
    }, [fetchDogsList]);

    if (isFetching) {
        return <Spinner size={'xl'} />;
    }

    if (isError) {
        return (
            <Alert status="error">
                <AlertIcon />
                <AlertDescription>Fetching error for Dogs list</AlertDescription>
            </Alert>
        );
    }

    return (
        <>
            {selectedDog && <Image className={dogPicture} src={`https://random.dog/${selectedDog}`} alt={'Dog pic'} />}
            {!selectedDog && (
                <Text fontSize={'lg'} className={selectDogLabel}>
                    Click to see Dog's picture.
                </Text>
            )}
            <table>
                <tbody>
                    {dogsList.map(dogItem => (
                        <DogsListItem key={dogItem} src={dogItem} onClick={setSelectedDog} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
