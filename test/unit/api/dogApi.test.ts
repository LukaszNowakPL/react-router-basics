/**
 * @jest-environment jsdom
 */
import {axios} from '../../../src/api/rest/axios';
import {mocked} from 'ts-jest/utils';
import {getDogsList} from '../../../src/api/dogsApi/dogsApi';

jest.mock('../../../src/api/rest/axios');

describe('dogApi', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
    });

    it('calls request for dogs list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getDogsList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('https://random.dog/doggos');
    });
});
