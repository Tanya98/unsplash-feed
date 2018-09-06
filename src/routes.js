import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Auth from './containers/auth';
import DetailPhoto from './containers/detail-photo';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/photo/:id' component={DetailPhoto} />
    </Switch>
);
