import React,{ Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Films from './pages/films';
import People from './pages/people';
import FilmDetail from './pages/filmDetail';

import Header from './components/header';

import { connect } from 'react-redux';

class Routes extends Component{
    render(){
        return(
        <BrowserRouter>
            <Header/>
                <Switch>            
                    <Route 
                        exact path={`/films`} 
                        component={() => <Films/>}>
                    </Route>
                    <Route 
                        exact path={`/people`} 
                        component={() => <People/>}>
                    </Route>
                    <Route 
                        path={`/films/${this.props.film_url}`} 
                        component={() => <FilmDetail/>}>
                    </Route>
                </Switch>
        </BrowserRouter>
        );
    }    
}

const mapStateToProps = state => {
    return {
        film_url: state.film_url
    }
}

export default connect(mapStateToProps)(Routes);