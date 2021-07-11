import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Repos from './pages/Repos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/repos' component={Repos} />
            </Switch>
        </BrowserRouter>
    )
}
