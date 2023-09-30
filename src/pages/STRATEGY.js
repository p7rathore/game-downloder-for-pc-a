import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import StataergyAlldata from "../componenets/StataergyAlldata";
import HomeFooter from "../componenets/HomeFooter";
const STRATEGY = () => {
  const [statrdata, setStatrdata] = useState([]);
  const [stlodding, setStlodding] = useState(true);

  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=STRATEGY", options6)
      .then((response) => response.json())
      .then((response) => {
        setStatrdata(response);
        setStlodding(false);
      });
  });

  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/66/gwent-2.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <StataergyAlldata STRATEGYData={statrdata} SloddingData={stlodding} />
      <HomeFooter />
    </>
  );
};

export default STRATEGY;
