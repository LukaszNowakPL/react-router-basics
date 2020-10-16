import {css} from 'emotion';

export const pokemonDetailsContainer = css({
    marginBottom: '50px',
});

export const pokemonName = css({
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'uppercase',
});

export const fetchingError = css({
    border: '1px red solid',
    borderRadius: '5px',
    padding: '4px',
    background: '#fdd',
    color: 'red',
});
