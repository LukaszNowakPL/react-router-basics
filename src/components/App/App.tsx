import React from 'react';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {PokemonList} from '../PokemonList/PokemonList';
import {Box, ChakraProvider} from '@chakra-ui/core';
import {DogsList} from '../DogsList/DogsList';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {getBaseName} from './App.helpers';
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";

export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <ChakraProvider>
                <Box width={'80%'} mx={'auto'}>
                    <Header />
                    <Switch>
                        <Route path={'/'} exact>
                            <Redirect to={ROUTES.POKEMON_LIST} />
                        </Route>
                        <Route path={ROUTES.POKEMON_LIST}>
                            <PokemonList />
                        </Route>
                        <Route path={ROUTES.DOGS_LIST}>
                            <DogsList />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                    <Footer />
                </Box>
            </ChakraProvider>
        </BrowserRouter>
    );
};
