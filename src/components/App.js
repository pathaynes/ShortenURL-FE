import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import Header from '../components/Header';
import UserForm from './user/UserFrom';


const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={UserForm}/>
      <Route path="/ShortenUrl" />
      <Route path="/Details" />
    </Switch>
  </Router>
);

export default App;
