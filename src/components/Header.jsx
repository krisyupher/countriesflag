import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../style/Header.css"
const Header = props => {
  return (
    <div className="HeaderContainer">
      <Link to="/" className="HeaderTittle">
        <h2>¿Donde en el mundo?</h2>
      </Link>
      <div>
        <a
          href="https://co.linkedin.com/in/cristian-florez-a291b3161"
          className="HeaderInfoDeveloperA"
          target="_blank"
        >
          <h4 className="HeaderInfoDeveloper">Cristian Florez</h4>
        </a>
        <a
          href="https://github.com/krisyupher"
          className="HeaderInfoDeveloperA"
          target="_blank"
        >
          <h4 className="HeaderInfoDeveloper">Desarrollador FrontEnd</h4>
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {

};

export default Header;