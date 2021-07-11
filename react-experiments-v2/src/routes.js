import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produtos' component={Produtos} />
            </Switch>
        </BrowserRouter>
    )
}
