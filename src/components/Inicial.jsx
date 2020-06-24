import React from 'react';
/* import PropTypes from 'prop-types'; */
import Home from "./Home.jsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
    }
    case 'SET_COUNTRY_BY_NAME': {
      const countryListByName = (state.countryList).filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...state, countryListByName }
    }
    case 'SET_COUNTRY_BY_REGION': {
      const countryListByRegion = (state.countryList).filter(country => 
        country.region === action.payload
      )
      return { ...state, countryListByRegion }
    }
    default: {
      return state
    }
  }
}
const store = createStore(reducer, initialState);
const Inicial = props => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
/* 
Inicial.propTypes = {

}; */

export default Inicial;