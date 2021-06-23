import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import ProdutoDetalhado from "./pages/ProdutoDetalhado";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/produto/:id" component= {ProdutoDetalhado} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
