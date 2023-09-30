import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import HomeFooter from "../componenets/HomeFooter";
import SciFicAllData from "../componenets/SciFicAllData";
const SCI_FI = () => {
  const [scificdata, setScificdata] = useState([]);
  const [slodding, setSlodding] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=sci-fi", options6)
      .then((response) => response.json())
      .then((response) => {
        setScificdata(response);
        setSlodding(false);
      });
  });
  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/59/insidia-1.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <SciFicAllData scificdeta={scificdata} scilodding={slodding} />
      <HomeFooter />
    </>
  );
};

export default SCI_FI;
