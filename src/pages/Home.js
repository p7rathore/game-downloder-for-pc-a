import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import HomeImageSlider from "../componenets/HomeImageSlider";
import HomeShowAllGames from "../componenets/HomeShowAllGames";
import HomeFooter from "../componenets/HomeFooter";
const Home = () => {
  const [gamedata, setGamedata] = useState([]);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    const options8 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games", options8)
      .then((response) => response.json())
      .then((response) => {
        setGamedata(response);

        setLodding(false);
      });
  });
  return (
    <>
      <Homenav />
      <HomeImageSlider />
      <HomeShowAllGames pregamedata={gamedata} loddingdata={lodding} />
      <HomeFooter />
    </>
  );
};

export default Home;
