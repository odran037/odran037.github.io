import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/app';
import Home from './modules/home';
import About from './modules/about';
import Portfolio from './modules/portfolio';

render((<Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Route>
        </Router>), document.getElementById('app'));
