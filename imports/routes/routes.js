import { Meteor } from 'meteor/meteor';
import React from 'react';
import RouteHook from 'react-route-hook';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import history from '..//ui/history';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const browserHistory = createBrowserHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
export const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        history.replace('/links');
    }
};
export const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        history.replace('/');
    }
}

export const onAuthChange = (isAuthenticated) => {
    const pathName = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isauthenticatedPage = authenticatedPages.includes(pathName);
    
    if (isUnauthenticatedPage && isAuthenticated) {
        history.replace('/links');
    } else if (isauthenticatedPage && !isAuthenticated) {
        history.replace('/');
    }
}
