# React router basics

[![MIT](https://img.shields.io/github/license/LukaszNowakPL/react-router-basics)](https://github.com/LukaszNowakPL/react-router-basics/blob/master/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/LukaszNowakPL/react-router-basics)](https://github.com/LukaszNowakPL/react-router-basics/blob/master/package.json)
[![Build Status](https://travis-ci.org/LukaszNowakPL/react-router-basics.svg?branch=master)](https://travis-ci.org/LukaszNowakPL/react-router-basics)
[![dependencies Status](https://david-dm.org/LukaszNowakPL/react-router-basics/status.svg)](https://david-dm.org/LukaszNowakPL/react-router-basics)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/72296b22b6f86c6bb712/maintainability)](https://codeclimate.com/github/LukaszNowakPL/react-router-basics/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/72296b22b6f86c6bb712/test_coverage)](https://codeclimate.com/github/LukaszNowakPL/react-router-basics/test_coverage)

React router basics is a presentation of good practices of how to wrap modern React application with React-router.

This presentation covers:
- Storing data on browser's url
- Reading data from browser's url
- Navigating the application state managed by browser's url
- Using `React hooks`
- Written in `TypeScript`
- Tested using `Jest` and `testing-library`

The presentation is build on top of [connect-with-api](https://github.com/LukaszNowakPL/connect-with-api) repo which was a presentation of modern application which connects with Api.

## Architecture motivation

Using simple words - the React router allows to write and read from browser's url which makes it perfect place for context-like store of an application state. This leads us to render applications according to the url which is a key for further debugging (user may copy an url address not saying what actions been taken before) and SEO optimisation to name a few.

### Routes collection

All routes are gathered on `helpers/routes.ts` file. It's advisable to use RESTful Api principles as it's easier to read, understand and valuable for search engine indexes.

### Custom hooks 

If you need to create some logic or actions to take on a route it's good to gather it on routes hook. For `POKEMON_DETAILS` route I use `hooks/route/usePokemonDetailsRoute` custom hook. The hook returns params connected with given route as well as a callback to navigate the browser to a given route. This hook becomes then single source of true connected with `POKEMON_DETAILS` route.

### Context-like source of true

The interesting part of this pattern is that the custom hook returns same data no matter if it's called by top component or the one that resides at very low end of components tree. It makes the url a context-like source of information for our application.

### Pitfall

The only one pitfall is that route hooks use `useParam` hook which is directly connected with `Route` component of `react-router`. This means that `useParam` returns parameters of a route used with latest `Route` component.

So even if a browser currently has a `/pokemon/2` url and the `usePokemonDetailsRoute` is called by a component wrapped like this `<Route path={ROUTES.POKEMON_LIST}><Component /></Route>` it will not return `2` as a `pokemonId` param. It's because it's been called by `POKEMON_LIST` matching instead of `POKEMON_DETAILS`.

## Testing motivation

__Note__: For this codebase purpose _integration test_ means all tests that renders React component.

For testing components that use any of `react-router` functions you have to provide a `history` object. I've provided `renderWithRouter` helper to render components within mocked history context. It returns all the `render` objects as well as `history` object.

Thanks to that `renderWithRouter(<Component />, ['/custom-url'])` is rendering a `<Component />` as it was called by a browser with `/custom-url` url.

To check if some actions changed existing url address you have to check length of `history.entries` array as well as `history.location.pathname` value.

Refer to `/test/integration/PokemonList.test.tsx` file for good examples as the component renders on `/pokemon` as well as `/pokemon/:pokemonId` route contexts.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Other used technologies sources:
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Jest](https://jestjs.io/docs/en/getting-started.html)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro)
- [Emotion](https://emotion.sh/docs/introduction)
- [Chakra-ui](https://chakra-ui.com/getting-started)
- [Axios](https://github.com/axios/axios)