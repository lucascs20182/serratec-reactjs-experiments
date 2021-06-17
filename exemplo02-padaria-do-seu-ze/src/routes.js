import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Main from "./pages/Main.jsx";
import Details from "./pages/Details.jsx";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Main} />
            <Route path="/detalhes/:id" component= {Details} />
        </Switch>
    </BrowserRouter>
);

export default Routes;