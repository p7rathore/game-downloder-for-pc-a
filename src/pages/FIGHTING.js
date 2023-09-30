import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import FightAllData from "../componenets/FightAllData";
import HomeFooter from "../componenets/HomeFooter";

const FIGHTING = () => {
  const [fightdata, setFightdata] = useState([]);
  const [filodding, setFilodding] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=fighting", options6)
      .then((response) => response.json())
      .then((response) => {
        setFightdata(response);
        setFilodding(false);
      });
  });
  return (
    <>
      <Homenav />

      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/450/Battlerite_Royale-1.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <FightAllData fightingdata={fightdata} lodingfi={filodding} />
      <HomeFooter />
    </>
  );
};

export default FIGHTING;
