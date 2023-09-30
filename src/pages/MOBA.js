import React, { useEffect } from "react";
import Homenav from "../componenets/Homenav";
import MobaAlldata from "../componenets/MobaAlldata";
import { useState } from "react";
import HomeFooter from "../componenets/HomeFooter";
const MOBA = () => {
  const [mobadata, setMobadata] = useState([]);
  const [loddinM, setLoddingM] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=moba", options6)
      .then((response) => response.json())
      .then((response) => {
        setMobadata(response);
        setLoddingM(false);
      });
  });

  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/4/crsed-4.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <MobaAlldata Mobagamedata={mobadata} loddingMoba={loddinM} />
      <HomeFooter />
    </>
  );
};

export default MOBA;
