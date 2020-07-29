import React from 'react';
import { Link } from "react-router-dom";
import "../style/Header.css"
const Header = props => {
  return (
    <div className="HeaderContainer">
      <Link to="/" className="HeaderTittle">
        <h2>where in the world?</h2>
      </Link>
      <div>
        <a
          href="https://co.linkedin.com/in/cristian-florez-a291b3161"
          className="HeaderInfoDeveloperA"
        >
          <h4 className="HeaderInfoDeveloper">Cristian Florez</h4>
        </a>
        <a
          href="https://github.com/krisyupher"
          className="HeaderInfoDeveloperA"
        >
          <h4 className="HeaderInfoDeveloper">Developer FrontEnd</h4>
        </a>
      </div>
    </div>
  );
};

export default Header;