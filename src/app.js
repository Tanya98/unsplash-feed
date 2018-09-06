import { Route, Link } from 'react-router-dom'
import Home from './components/home';
import Auth from './containers/auth';

export const App = (props) => (
    <div>
        <header>
            {/* <Link to="/">Home</Link> */}
            <Link to="/auth">Перейти</Link>
        </header>

        <main>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/auth" component={Auth} />
        </main>
    </div>
)