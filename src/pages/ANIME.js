import React, { useEffect } from "react";
import Homenav from "../componenets/Homenav";
import AnimeAlldata from "../componenets/AnimeAlldata";
import { useState } from "react";
import HomeFooter from "../componenets/HomeFooter";
const ANIME = () => {
  const [animedata, setAnimedata] = useState([]);
  const [loddingAn, setLoddingAn] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=anime", options6)
      .then((response) => response.json())
      .then((response) => {
        setAnimedata(response);
        setLoddingAn(false);
      });
  });

  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/1127/noahs-heart-1.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <AnimeAlldata Animegamedata={animedata} loddingAnime={loddingAn} />
      <HomeFooter />
    </>
  );
};

export default ANIME;
