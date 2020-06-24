import React, { useEffect, useState } from 'react';
import "../style/CountryDetail.css";
/* import PropTypes from 'prop-types'; */
import CountrySelected from "../components/CountrySelect.jsx"

const CountryDetail = ({ match }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCountry(data[0])
      })
      .catch(() => {
        console.log("Grave error")
      })
  }, [match])
  return (
    <div className="CountryDetailContainer">
      <CountrySelected {...country} />    
    </div>
  );
};
/* 
CountryDetail.propTypes = {
}; */

export default CountryDetail;