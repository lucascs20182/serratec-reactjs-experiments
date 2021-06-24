import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import TelaInicial from "./pages/TelaInicial";
import DetalhesDoProduto from "./pages/DetalhesDoProduto";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={TelaInicial}></Route>
            <Route path={'/produto/:id'} component={DetalhesDoProduto}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/cadastro'} component={Cadastro}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
