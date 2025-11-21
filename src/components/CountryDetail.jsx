import React, { useEffect, useState } from 'react';
import "../style/CountryDetail.css";
/* import PropTypes from 'prop-types'; */
import CountrySelected from "../components/CountrySelect.jsx"

const CountryDetail = ({ match, history }) => {
  const [country, setCountry] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${match.params.id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const countryData = data[0]
        const normalizedCountry = {
          flag: countryData.flag || '',
          name: countryData.name?.common || '',
          nativeName: countryData.nativeName ? Object.values(countryData.nativeName)[0]?.common || '' : '',
          population: countryData.population || 0,
          region: countryData.region || '',
          subregion: countryData.subregion || '',
          capital: Array.isArray(countryData.capital) ? countryData.capital[0] || '' : '',
          topLevelDomain: Array.isArray(countryData.tld) ? countryData.tld[0] || '' : '',
          currencies: countryData.currencies ? Object.values(countryData.currencies) : [],
          languages: countryData.languages ? Object.values(countryData.languages) : [],
          borders: countryData.borders || []
        }
        setCountry(normalizedCountry)
      })
      .catch(() => {
        console.log("Grave error")
      })
  }, [match])
  function handleClick() {
    history.goBack()
  }
  return (
    <div className="CountryDetailContainer">
      <div className="BackContainer">
        <button className="back" onClick={handleClick}>
          {"← Back"}
        </button>
      </div>
      <CountrySelected {...country} />
    </div>
  );
};
/* 
CountryDetail.propTypes = {
}; */

export default CountryDetail;
