import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './components/App.jsx';
import styles from './stylesheets/styles.css';
import LoginPage from './components/Login/LoginPage.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/login" name="login" component={LoginPage}></Route>
    
  
  </Router>
  ,
app);
