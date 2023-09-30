import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import MmprpgAlldataShow from "../componenets/MmprpgAlldataShow";
import HomeFooter from "../componenets/HomeFooter";

const Mmprpg = () => {
  const [mmprpgdata, setMmprpg] = useState([]);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=mmorpg", options6)
      .then((response) => response.json())
      .then((response) => {
        /*   console.log(response); */
        setMmprpg(response);
        setLodding(false);
      });
  });
  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/1/dauntless-2.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <MmprpgAlldataShow MmprpgData={mmprpgdata} loddingM={lodding} />
      <HomeFooter />
    </>
  );
};

export default Mmprpg;
