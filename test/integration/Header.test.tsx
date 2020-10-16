import React from 'react';
import {Header} from '../../src/components/Header/Header';
import userEvent from '@testing-library/user-event';
import {renderWithRouter} from "../_helpers/renderWithRouters";

describe('Header', () => {
    it('renders component', async () => {
        const {getByRole} = renderWithRouter(<Header />);

        expect(getByRole('heading', {name: /react router basics example/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /pokemon api/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /dog api/i})).toBeInTheDocument();
    });

    it('sets /pokemon url on click on Pokemon API button', () => {
        const {getByRole, history} = renderWithRouter(<Header />);
        userEvent.click(getByRole('link', {name: /pokemon api/i}));

        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/pokemon')
    });

    it('sets /dogs url on click on Dog API button', () => {
        const {getByRole, history} = renderWithRouter(<Header />);
        userEvent.click(getByRole('link', {name: /dog api/i}));

        expect(history.entries).toHaveLength(2);
        expect(history.location.pathname).toEqual('/dogs')
    });
});
