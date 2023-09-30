import React, { useEffect, useState } from "react";
import Homenav from "../componenets/Homenav";
import HomeFooter from "../componenets/HomeFooter";
import SocialAllData from "../componenets/SocialAllData";
const SOCIAL = () => {
  const [socialdata, setSocialdata] = useState([]);
  const [loddingsc, setLoddingsc] = useState(true);
  useEffect(() => {
    const options6 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games?category=social", options6)
      .then((response) => response.json())
      .then((response) => {
        setSocialdata(response);
        setLoddingsc(false);
      });
  });
  return (
    <>
      <Homenav />
      <div className="m-img-di">
        <img
          className="img-m"
          src="https://www.mmobomb.com/g/67/awesomenauts-1.jpg"
          alt="mmorpg.jpg"
        />
      </div>
      <SocialAllData socialdata={socialdata} loddingsoc={loddingsc} />
      <HomeFooter />
    </>
  );
};

export default SOCIAL;
