import React from 'react';
import { useHistory, /* useLocation */ } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
import "../style/Flag.css";
const Flag = props => {
  const { name, imgflag, descriptionflag, population, capital, region } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/Detalle/${name}`)
  }
  return (
    <div className="Flag-Container" onClick={handleClick}>
      <img loading="lazy" src={imgflag} alt={descriptionflag} className="FlagImagenFlag" />
      <h2 className="FlagTittle">{name}</h2>
      <div className="Flag-Informacion-Container">
        <p> <strong>Population: </strong> {population}</p>
        <p> <strong>Capital:</strong> {capital}</p>
        <p> <strong>Region:</strong> {region}</p>
      </div>
    </div>
  );
};

/* Flag.propTypes = {

}; */

export default Flag;