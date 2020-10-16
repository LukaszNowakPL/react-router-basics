import React from 'react';
import {createMemoryHistory} from "history";
import {render} from "@testing-library/react";
import {Router} from "react-router-dom";

export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(<Router history={history}>{ui}</Router>);
        return {...renderResult, history};
};