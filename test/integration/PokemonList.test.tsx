import React from 'react';
import {mocked} from 'ts-jest/utils';
import {getPokemonListResponse400Mock, getPokemonListResponseMock} from '../_helpers/api/pokemonApi.mocks';
import {getPokemonList} from '../../src/api/pokemonApi/pokemonApi';
import {PokemonList} from '../../src/components/PokemonList/PokemonList';
import {waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {PokemonDetails} from '../../src/components/PokemonDetails/PokemonDetails';
import {renderWithRouter} from "../_helpers/renderWithRouters";

jest.mock('../../src/api/pokemonApi/pokemonApi');
jest.mock('../../src/components/PokemonDetails/PokemonDetails');

describe('PokemonList', () => {
    beforeEach(() => {
        mocked(getPokemonList).mockReturnValue(getPokemonListResponseMock);
        mocked(PokemonDetails).mockReturnValue(<h2>PokemonDetails</h2>);
    });

    it('triggers an api call for getting list of pokemon', async () => {
        renderWithRouter(<PokemonList />, ['/pokemon']);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });
    });

    it('renders spinner when api call is not resolved', async () => {
        const {getByText, queryByText} = renderWithRouter(<PokemonList />, ['/pokemon']);

        expect(getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });
        expect(queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('shows error when api call resolves with error', async () => {
        mocked(getPokemonList).mockRejectedValue(getPokemonListResponse400Mock);

        const {getByText} = renderWithRouter(<PokemonList />, ['/pokemon']);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        expect(getByText('Fetching error for Pokemon list')).toBeInTheDocument();
    });

    it('renders component correctly', async () => {
        const {getByText, getByRole} = renderWithRouter(<PokemonList />, ['/pokemon']);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        expect(getByText("Click button to see Pokemon's details.")).toBeInTheDocument();
        expect(getByRole('cell', {name: /mocked name/i})).toBeInTheDocument();
        expect(getByRole('button', {name: /details/i})).toBeInTheDocument();
    });

    it('sets /pokemon/2 url after click on a details button', async () => {
        const {getByRole, history} = renderWithRouter(<PokemonList />, ['/pokemon']);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        userEvent.click(getByRole('button', {name: /details/i}));

        await waitFor(() => {
            expect(history.entries).toHaveLength(2);
        });
        expect(history.location.pathname).toEqual('/pokemon/1');
    });

    it('shows pokemon details when on /pokemon/2 url', async () => {
        const {getByRole} = renderWithRouter(<PokemonList />, ['/pokemon/2']);
        await waitFor(() => {
            expect(getPokemonList).toHaveBeenCalledTimes(1);
        });

        expect(getByRole('heading', {name: 'PokemonDetails'})).toBeInTheDocument();
    });
});
