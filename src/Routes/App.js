import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountryDetail from "../components/CountryDetail.jsx";
import Home from '../components/Home.jsx';
import Header from '../components/Header.jsx';
import "normalize.css"

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Detalle/:id' component={CountryDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;