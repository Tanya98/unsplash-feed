import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Photos from './containers/photos';
import DetailPhoto from './containers/detail-photo';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/photos' component={Photos} />
        <Route path='/photo/:id' component={DetailPhoto} />
    </Switch>
);
