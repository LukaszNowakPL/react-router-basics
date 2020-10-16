import {generatePath, useHistory, useParams} from "react-router-dom"
import {useCallback} from "react";
import {ROUTES} from "../../helpers/routes";

interface PokemonDetailsRouteParams {
    pokemonId?: string;
}

export interface UsePokemonDetailsRoute {
    params: PokemonDetailsRouteParams;
    setPokemonDetailsRoute: (newPokemonId: string) => void;
}

export const usePokemonDetailsRoute = (): UsePokemonDetailsRoute => {
    const params = useParams();
    const history = useHistory();

    const setPokemonDetailsRoute = useCallback((newPokemonId: string) => {
        const path = generatePath(ROUTES.POKEMON_DETAILS, {pokemonId: newPokemonId});
        history.push(path)
    }, [history]);

    return {
        params,
        setPokemonDetailsRoute,
    }
};