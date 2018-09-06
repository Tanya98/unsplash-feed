import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import photoReducer from './reducers/reducer';
import createHistory from 'history/createBrowserHistory'
import 'material-components-web/dist/material-components-web.min.css';
import routes from './routes';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        photoReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
// const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));
// const history = syncHistoryWithStore(createBrowserHistory(), store);

window.localStorage.setItem('start', 0);
window.localStorage.setItem('end', 10);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    {routes}
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)