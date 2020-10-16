import {dogsApi} from '../../helpers/constants';
import {axios} from '../rest/axios';

export const getDogsList = () => {
    return axios.get(dogsApi);
};
