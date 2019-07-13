import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Films from './pages/films';
import People from './pages/people';
import FilmDetail from './pages/filmDetail';

import Header from './components/header';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>            
            <Route 
                exact path="/films" 
                component={() => <Films/>}>
            </Route>
            <Route 
                exact path="/people" 
                component={() => <People/>}>
            </Route>
            <Route 
                path="/films/aaa" 
                component={() => <FilmDetail/>}>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;