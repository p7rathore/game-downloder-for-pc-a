import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lodding from "../componenets/Lodding";
const GameDataShow = () => {
  const [gamedata, setGamedata] = useState([]);
  const [lodding, setLodding] = useState(true);
  const { id } = useParams();
  const GeatData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21c700deffmsh1c61fb86617349fp197812jsne0666c11ac8e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setGamedata(response);
        setLodding(false);
      });
  };
  GeatData();

  return (
    <>
      {lodding ? (
        <Lodding />
      ) : (
        <div className="component-home">
          <div className="img-compo">
            {gamedata.screenshots.length !== 0 ? (
              <>
                <img
                  className="get-img"
                  src={gamedata.screenshots[0].image}
                  alt="screenshort.jpg"
                />
              </>
            ) : (
              <h1 className="game-name">Image NOt Found !</h1>
            )}

            <div className="g-name">
              <h1 className="game-name">{gamedata.title}</h1>
            </div>
          </div>
          <h1 className="des">description</h1>
          <div className="des-copm">
            <p className="description-p">{gamedata.description}</p>
          </div>
          <div className="data-btn">
            <a href={gamedata.game_url}>
              <button className="btn">PLAY GAME</button>
            </a>
          </div>

          <h1 className="addistinal-impho">Additional Information</h1>
          <div className="add-impho">
            <h1 className="add-text">genre : {gamedata.genre}</h1>
            <h1 className="add-text">platform : {gamedata.platform}</h1>
            <h1 className="add-text"> publisher : {gamedata.publisher} </h1>
            <h1 className="add-text">developer : {gamedata.developer}</h1>
            <h1 className="add-text">release_date : {gamedata.release_date}</h1>
          </div>

          <h1 className="min-sys-req">minimum system requirements</h1>
          {gamedata.minimum_system_requirements ? (
            <>
              <div className="min-req-st">
                <h1 className="mim-text">
                  os :{gamedata.minimum_system_requirements.os}
                </h1>
                <h1 className="mim-text">
                  processor : {gamedata.minimum_system_requirements.processor}
                </h1>
                <h1 className="mim-text">
                  storage:{gamedata.minimum_system_requirements.storage}
                </h1>
                <h1 className="mim-text">
                  graphics : {gamedata.minimum_system_requirements.graphics}
                </h1>
                <h1 className="mim-text">
                  memory : {gamedata.minimum_system_requirements.memory}
                </h1>
              </div>
            </>
          ) : (
            <h1 className="game-name"> not requirements</h1>
          )}
        </div>
      )}
    </>
  );
};

export default GameDataShow;
