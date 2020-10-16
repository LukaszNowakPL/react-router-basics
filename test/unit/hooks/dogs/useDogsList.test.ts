/**
 * @jest-environment jsdom
 */
import {useDogsList} from '../../../../src/hooks/dogs/useDogsList';
import {renderHook} from '@testing-library/react-hooks';
import {getDogsList} from '../../../../src/api/dogsApi/dogsApi';
import {mocked} from 'ts-jest/utils';

jest.mock('../../../../src/api/dogsApi/dogsApi');

describe('useDogsList hook', () => {
    it('calls api function and returns its answer', async () => {
        mocked(getDogsList).mockResolvedValue({data: ['dog.jpg']});

        const {result} = renderHook(() => useDogsList());
        await result.current.fetchDogsList();

        expect(getDogsList).toHaveBeenCalled();
        expect(result.current.dogsList).toEqual(['dog.jpg']);
    });

    it('returns isError equal true when api resolved with error', async () => {
        mocked(getDogsList).mockRejectedValue('error');

        const {result} = renderHook(() => useDogsList());
        await result.current.fetchDogsList();

        expect(result.current.isError).toBeTruthy();
    });
});
