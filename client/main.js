import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import RouteHook from 'react-route-hook';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import {createBrowserHistory} from 'history';
import { routes, onAuthChange, onEnterPublicPage, onEnterPrivatePage } from '../imports/routes/routes';

import '../imports/startup/simple-schema-configuration';

import { Links } from '../imports/api/links';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

import './main.html';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});



Meteor.startup(() => {
  ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>  
        <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
        <Route path="/" exact component={Login} onEnter={onEnterPublicPage}/>
        <Route component={NotFound} />
    </Switch>   
  </BrowserRouter>, document.getElementById('app'));
});


