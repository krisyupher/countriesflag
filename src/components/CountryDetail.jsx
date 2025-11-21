import React, { useEffect, useState } from 'react';
import "../style/CountryDetail.css";
/* import PropTypes from 'prop-types'; */
import CountrySelected from "../components/CountrySelect.jsx"

const CountryDetail = ({ match, history }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${match.params.id}`)
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
