import React, { useState } from "react";
import logo from "../images/video-games.png";
import { Link } from "react-router-dom";
import HameBurgerNAv from "./HameBurgerNAv";
const Homenav = () => {
  const [hameToggle, setHameToggle] = useState(false);
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="name-site">
            <img className="logo" src={logo} alt="logo.png" />
            <h1 className="site-name">
              Game<span className="red">H</span>ube
            </h1>
          </div>
        </Link>
        <div className="list">
          <ul>
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
        <div className="menu" onClick={() => setHameToggle(!hameToggle)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {hameToggle ? <HameBurgerNAv /> : null}
    </>
  );
};

export default Homenav;
