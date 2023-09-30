import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import HomeFooter from "../componenets/HomeFooter";
import RacingAllData from "../componenets/RacingAllData";
const RACING = () => {
  const [racingdata, setracingdata] = useState([]);
  const [raclodding, setRaclodding] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=racing", options6)
      .then((response) => response.json())
      .then((response) => {
        setracingdata(response);
        setRaclodding(false);
      });
  });

  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/121/Forza-Motorsport-6-Apex-gameplay-screenshots-2.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <RacingAllData racingdata={racingdata} loddingrc={raclodding} />
      <HomeFooter />
    </>
  );
};

export default RACING;
