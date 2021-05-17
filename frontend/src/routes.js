import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import List from './pages/List'
import Profile from './pages/Profile'

export default function Routes(){
    return( //Rotas com seus respectivos caminhos e componentes
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={List}/> 
                <Route path="/users/list" component={List}/> 
                <Route path="/users/create" component={Profile}/> 
                <Route path="/users/update/:id" component={Profile}/> 
            </Switch>
        </BrowserRouter>
    );
}