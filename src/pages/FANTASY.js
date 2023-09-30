import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import FantacyAllData from "../componenets/FantacyAllData";
import HomeFooter from "../componenets/HomeFooter";
const FANTASY = () => {
  const [fantacydata, setFantacydata] = useState([]);
  const [falodding, setFalodding] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=fantasy", options6)
      .then((response) => response.json())
      .then((response) => {
        setFantacydata(response);
        setFalodding(false);
      });
  });

  return (
    <>
      <Homenav />

      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/523/lost-ark-2.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <FantacyAllData fantacy={fantacydata} fanLodding={falodding} />
      <HomeFooter />
    </>
  );
};

export default FANTASY;
