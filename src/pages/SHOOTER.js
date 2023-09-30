import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import ShooterAlldata from "../componenets/ShooterAlldata";
import HomeFooter from "../componenets/HomeFooter";
const SHOOTER = () => {
  const [shooterdata, setShooterdata] = useState([]);
  const [loddingS, setLoddingS] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=shooter", options6)
      .then((response) => response.json())
      .then((response) => {
        setShooterdata(response);
        setLoddingS(false);
      });
  });
  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/1136/overwatch-2-1.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <ShooterAlldata Shooterpagedata={shooterdata} loddingshooter={loddingS} />
      <HomeFooter/>
    </>
  );
};

export default SHOOTER;
