import React from 'react';
import {headerButton, headerButtonSelected, headerContainer, headerMenu} from './Header.style';
import {Grid, Heading} from '@chakra-ui/core';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';

export const Header: React.FC = () => {
    return (
        <div className={headerContainer}>
            <Heading>React router basics example</Heading>
            <Grid templateColumns="repeat(2, 1fr)" className={headerMenu}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.POKEMON_LIST}>
                    Pokemon API
                </NavLink>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.DOGS_LIST}>
                    Dog API
                </NavLink>
            </Grid>
        </div>
    );
};
