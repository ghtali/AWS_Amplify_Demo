import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <Navigation/>
          </div>
          <div className="container">
          <div className="row">
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/products" component={ProductsPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
