import React, { useEffect, useState } from 'react';
/* import PropTypes from 'prop-types'; */
import Flag from "./Flag.jsx";
import { useSelector, useDispatch } from 'react-redux';
import FlagEnglish from "../assets/icons8-great-britain-80.png"
import "../style/Home.css"
const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  const countryListByName = useSelector((state) => state.countryListByName)
  const countryListByRegion = useSelector((state) => state.countryListByRegion)
  const countryList = useSelector((state) => {
    if (countryListByName.length > 0) {
      return countryListByName
    }
    if (countryListByRegion.length > 0) {
      return countryListByRegion;
    }
    return state.countryList
  })
  /*   const [countryList, setCountryList] = useState([]); */
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        /* setCountryList(data) */
        dispatch({
          type: 'SET_COUNTRY_LIST', /* Accion en la funcion reducer*/
          payload: data /* Estado en la funcion reducer */
        })
      })
      .catch(() => {
        console.log("Grave error")
      })
  }, [dispatch])
  const filterByName = (e) => {
    setInputValue(e.target.value);
    document.getElementById("SelectByRegion").selectedIndex = 0;
    dispatch({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value,
    })
  }
  const filterByRegion = (e) => {
    setInputValue("");
    dispatch({
      type: 'SET_COUNTRY_BY_REGION',
      payload: e.target.value,
    })
  }
  return (
    <>
      {console.log("countryList", countryList)}
      {console.log("countryListByName", countryListByName)}
      {console.log("countryListByRegion", countryListByRegion)}
      <div className="HomeHeaderSearch">
        <div className="containerSearch">
          <img src={FlagEnglish} alt="FlagEnglish" className="FlagEnglish" />
          <input
            type="text"
            value={inputValue}
            onChange={filterByName}
            className="HomeFilterByName"
            placeholder="Search by name"
          />
        </div>
        <select onChange={filterByRegion} className="HomeSelectRegion" id="SelectByRegion">
          <option value="">All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
      <div className="HomeContainer">
        {countryList.map((country) => {
          return (
            <Flag
              key={country.numericCode}
              name={country.name}
              imgflag={country.flag}
              descriptionflag={country.nativeName}
              population={country.population}
              capital={country.capital}
              region={country.region}
            />
          )
        })}
      </div>
    </>
  );
};
/* 
Home.propTypes = {

};
 */
export default Home;