import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserHistory } from 'history';

import './style/main.scss';
import Home from './components/home';
import Layout from './components/layout';
import Blog from './components/blog';
import Instagram from './components/instagram';
import Contact from './components/contact';


function main() {
  ReactDOM.render(
      <Router history={createBrowserHistory({})}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/instagram' exact component={Instagram} />
            <Route path='/contact' exact component={Contact} /> 
          </Switch>
        </Layout>
      </Router>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
