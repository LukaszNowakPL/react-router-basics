import {useCallback, useState} from 'react';
import {getDogsList} from '../../api/dogsApi/dogsApi';
import {filterDogs} from './useDogsList.helpers';

export const useDogsList = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [dogsList, setDogsList] = useState<string[]>([]);

    const fetchDogsList = useCallback(async () => {
        setIsFetching(true);
        try {
            const dogs = await getDogsList();
            setDogsList(filterDogs(dogs.data));
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        dogsList,
        fetchDogsList,
    };
};
