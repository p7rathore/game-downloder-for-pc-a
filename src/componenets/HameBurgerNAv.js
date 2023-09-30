import React from "react";
import { Link } from "react-router-dom";
const HameBurgerNAv = () => {
  return (
    <>
      <div className="hame-nav">
        <ul className="ul">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Mmprpg">MMORPG</Link>
          </li>
          <li>
            <Link to="/SHOOTER">SHOOTER</Link>
          </li>
          <li>
            <Link to="/MOBA">MOBA</Link>
          </li>
          <li>
            <Link to="/ANIME">ANIME</Link>
          </li>
          <li>
            <Link to="/STRATEGY">STRATEGY</Link>
          </li>
          <li>
            <Link to="/FANTASY">FANTASY</Link>
          </li>
          <li>
            <Link to="/SCIFI">SCI-FI</Link>
          </li>
          <li>
            <Link to="/RACING">RACING</Link>
          </li>
          <li>
            <Link to="/FIGHTING">FIGHTING</Link>
          </li>
          <li>
            <Link to="/SOCIAL">SOCIAL</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HameBurgerNAv;
